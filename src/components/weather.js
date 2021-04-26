import React , { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import weatherService from '../services/weather-service';

const Weather = ({weatherReport, findWeatherForCity}) => {

    useEffect(() => {
        findWeatherForCity("denver")
        console.log(weatherReport)
    }, [weatherReport])

    return(
        <>
        <h1>Hello</h1>
        <p>{JSON.stringify(weatherReport)}</p>
        <button onClick={() => findWeatherForCity("denver")}>GET WEATHER</button>
        </>
    )
}

const stpm = ( state ) => { return {
    weatherReport: state.weatherReducer.weatherReport
}}

const dtpm = ( dispatch ) => { return {
    findWeatherForCity: city =>
        weatherService.findWeatherForCity(city)
            .then(weatherReport => dispatch({
                type: "FIND_WEATHER_FOR_CITY",
                weatherReport
            }))
}}
    

export default connect ( stpm , dtpm ) ( Weather )