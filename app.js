import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Titles from './components/Titles';
import Form from "./components/Form";
import Weather from "./components/Weather";



class App extends Component {
  
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description : undefined,
    error:undefined    
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e1c62e8ee0439393c00fc2c41a6e88fc&units=metric`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description, //dealing with arrays
      error: ""
    });
    }
    else{
      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the value"
    });
    }
    
  } 

 

  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature} 
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
}



export default App;