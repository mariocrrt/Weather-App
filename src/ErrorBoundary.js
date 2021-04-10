import React from 'react'

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }

    resetState = () => {
      this.setState({hasError:false })
    }
    
    render() {
      if (this.state.hasError) {
        return <h3 className='error_text'>Looks like something went wrong. Please refresh the page and try again.</h3>;
      }
  
      return this.props.children; 
    }
}