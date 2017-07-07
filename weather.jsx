import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state={loc: ["",""]};
    this.state.weather="weather not found.";
    this.state.temp="";
  }

  fetchWeather(loc){
    const request = new XMLHttpRequest();
    // request.responseType("json");
    request.open("GET",
    `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.loc[0]}&lon=${this.state.loc[1]}&appid=23600fbc7830619f867fd0894063b8e1`,
      true);
      // console.log("Weather fetching...");
    request.onload = e =>{
      // console.log(request.status);
      if (request.status===200){
        this.setState({weather: JSON.parse(request.response)});
        console.log(this.state.weather.main);
        this.setTemp();
      }
    };
    request.send();
  }

  setTemp(){
    this.setState({temp: this.state.weather.main.temp.toString()});
  }

  componentDidMount(){

    navigator.geolocation.getCurrentPosition((position)=>
      {this.setState({loc: [position.coords.latitude,
      position.coords.longitude]
    });
    this.fetchWeather();

    }
    );
  }

  render(){
    return (
      <div>

          <h2>Awesome thermometer</h2>

        <section>
          <br></br>
          <h1 className="city">City: {this.state.weather.name}</h1>
          <br></br>
          <h1 className="temp">Temperature (K): {this.state.temp}</h1>
          <br></br>
        </section>
      </div>
    );
  }
}
export default Weather;
