import './styles/App.css';
import React, { useState } from 'react'
import { ErrorBoundary } from './ErrorBoundary';
import Weather from './Weather'

const api = {
  base: "https://api.openweathermap.org/data/2.5/"
}

const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [city, setCity] = useState([])
  const [noData, setNoData] = useState(true)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(null)

  const fetchData = async (e) => {
    e.preventDefault()
    const url = `${api.base}weather?q=${query}&units=metric&APPID=${apiKey}`
    try {
      setLoading(true)
      const res = await fetch (url)
      const data = await res.json();
      setCity(data)
      setNoData(false)
      setLoading(false)
      setQuery('')
    } catch (err)  {
      console.error(err)
    }
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={fetchData}>
          <input 
            type='text'
            placeholder='e.g. London'
            value={query}
            autoComplete='off'
            autoCapitalize='on'
            onChange={(e) => {setQuery(e.target.value)}}
          />
          <button>Search</button>
        </form>

        {loading 
          ? <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          : <Weather 
              city={city} 
              noData={noData}
            />
        }
      </div>
    </ErrorBoundary>
  );
}

export default App;
