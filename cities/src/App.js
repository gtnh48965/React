import React from "react";
import { Info, Form, Weather } from "./components";

const API_KEY = "6ad920b11fc6ef9f4486ff14e332cc17";

const fetchData = async url => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};
const getFormattedDate = timestamp => {
  const date = new Date();
  date.setTime(timestamp);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
const getWeatherData = async city => {
  const data = await fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const sunset_date = getFormattedDate(data.sys.sunset);
  return {
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    pressure: data.main.pressure,
    sunset: sunset_date
  };
};

class App extends React.Component {
  state = {
    weatherData: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const data = await getWeatherData(city);

      this.setState({
        weatherData: data,
        error: undefined
      });
    } else {
      this.setState({
        weatherData: undefined,
        error: "Введите название города"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Info />
        <Form onSubmit={this.gettingWeather} />
        <Weather data={this.state.weatherData} error={this.state.error} />
      </div>
    );
  }
}

export default App;
