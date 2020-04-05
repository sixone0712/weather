import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY="aa7e03629d578f3d2a9b83f8ee23cba6";

export default class App extends React.Component {

  state = {
    isLoading: true,
    condition: "",
    temp: 0,
    description: ""
  }

  getWeather = async (longitude, latitude) => {
    const { 
      data : {
        main: {temp},
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${latitude}&appid=${API_KEY}&units=metric&lang=kr`);

    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main,
      description: weather[0].description
    })
  }

  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      const { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(longitude, latitude);
    } catch (error) {
      Alert.alert("Can't find you", "So Sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, description } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} description={description}/>;
  }
}