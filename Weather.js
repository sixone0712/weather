import React from 'react';
import PropsTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName : "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Haze",
        subTitle: "What'up, Haze"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#403A3E", "#BE5869"],
        title: "Thunderstorm",
        subTitle: "What'up, Thunderstorm"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#373B44", "#4286f4"],
        title: "Drizzle",
        subTitle: "What'up, Drizzle"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#373B44", "#4286f4"],
        title: "Rain",
        subTitle: "What'up, Rain"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#4CA1AF", "#C4E0E5"],
        title: "Snow",
        subTitle: "What'up, Snow"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Mist",
        subTitle: "What'up, Mist"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Smoke",
        subTitle: "What'up, Smoke"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Dust",
        subTitle: "What'up, Dust"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Fog",
        subTitle: "What'up, Fog"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Sand",
        subTitle: "What'up, Sand"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Ash",
        subTitle: "What'up, Ash"
    },
    Squall: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Squall",
        subTitle: "What'up, Squall"
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#136a8a", "#267871"],
        title: "Tornado",
        subTitle: "What'up, Tornado"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#C6FFDD", "#FBD786", "#f7797d"],
        title: "Clear",
        subTitle: "What'up, Clear"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Clouds",
        subTitle: "What'up, Clouds"
    },
}

const Weather = ({temp, condition, description }) => {
    
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={style.constainer}>
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={style.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={style.temp}>{temp}°</Text>
            </View>
            <View style={{...style.halfContainer, ...style.textContainer}}>
                <Text style={style.title}>{weatherOptions[condition].title}</Text>
                <Text style={style.subTitle}>{description}</Text>
            </View>
        </LinearGradient>
    );
}; 

Weather.prototype = {
    temp: PropsTypes.number.isRequired,
    condition: PropsTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"]).isRequired
};

const style = StyleSheet.create({
     constainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
     },
     temp: {
         fontSize: 42,
         color: "white"
     },
     halfContainer: {
         flex: 1,
         justifyContent: "center",
         alignItems: "center"
     },
     title: {
         color: "white",
         fontSize: 44,
         fontWeight: "300",
         marginBottom: 10
     },
     subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 22,
    },
    textContainer: {
        paddingHorizontal: 20,
        //alignItems: "flex-start"
    }
     
})

export default Weather; 