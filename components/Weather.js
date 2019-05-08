import React from "react"

class Weather extends React.Component{
  render(){
    return(
        <div>
          Location: {this.props.city}<br/>
          Country :{this.props.country}<br/>
          Temperature : {this.props.temperature}<br/>
          Humidity: {this.props.humidity}<br/>
          Description: {this.props.description}<br/>
          {this.props.error && <p>{this.props.error}</p>} 
          
        </div>
    );
  }
}

export default Weather;