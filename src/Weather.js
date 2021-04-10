const Weather = ({city, noData}) => {    
    return(
        <div>
            {noData 
            ?   <p className='filler_message'>
                    It's a bit too empty here...
                </p>
            :   <div className='big_div'>
                    {city.message 
                        ?   <p className='error_message'>Oops, {city.message}...</p>
                        :   <div> 
                                <div className={
                                (typeof city.main != 'undefined') 
                                    ? ((city.main.temp > 16) 
                                        ? 'circle1 warm' 
                                        : 'circle1')
                                    : 'circle1'
                                }></div>
                                <div className={
                                (typeof city.main != 'undefined') 
                                    ? ((city.main.temp > 16) 
                                        ? 'circle2 warm' 
                                        : 'circle2')
                                    : 'circle2'
                                }></div>
                                <div className={
                                (typeof city.main != 'undefined') 
                                    ? ((city.main.temp > 16) 
                                        ? 'weather_div warm' 
                                        : 'weather_div')
                                    : 'app2'
                                }>
                                    <p><strong>City:</strong> {city.name}</p>
                                    <hr></hr>
                                    <p><strong>Country:</strong> {city.sys.country}</p>
                                    <hr></hr>
                                    <p><strong>Temperature:</strong> {Math.round(city.main.temp)}C°</p>
                                    <hr></hr>
                                    <p><strong>Conditions:</strong> {city.weather[0].main}</p>
                                    <hr></hr>
                                    <p><strong>Max:</strong> {Math.round(city.main.temp_max)}C° </p>
                                    <hr></hr>
                                    <p><strong>Min:</strong> {Math.round(city.main.temp_min)}C° </p>
                                    <hr></hr>
                                    <p><strong>Feels like:</strong> {Math.round(city.main.feels_like)}C°</p>
                                </div>
                            </div>
                    }
                </div>
            }
        </div>
    )
}

export default Weather