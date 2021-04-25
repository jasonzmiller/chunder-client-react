import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import weatherService from '../services/weather-service';

const WeatherReport = ({
    mountain,
    weatherReport,
    findWeatherForCity
}) => {

    useEffect(() => {
        if ( mountain !== "undefined" && typeof mountain !== "undefined" ){
            console.log("HERE")
            findWeatherForCity(mountain.city)
        }
        if ( weatherReport !== "undefined" && typeof weatherReport !== "undefined" ){
            console.log(weatherReport)
        }
    }, [mountain.city])

    return(
        <>
        <div className="row">
            <div className="col-12">
                    Current weather: 
                </div>
            <div className="col-12">
                Temperature (C):
            </div>
            <div className="col-12">
                Wind:
            </div>
            <div className="col-12">
                <button 
                    className="btn btn-warning" 
                    onClick={() => findWeatherForCity(mountain.city)}>REFRESH WEATHER</button>
            </div>

            {/* <div className="col-12">
                    Current weather: {weatherReport.weather[0].main}
                </div>
            <div className="col-12">
                Temperature (C): {Math.round(weatherReport.main.temp - 273.15)}
            </div>
            <div className="col-12">
                Wind: {weatherReport.wind.speed}
            </div>
            <div className="col-12">
                <button className="btn btn-warning" onClick={() => findWeatherForCity(mountain.city)}>REFRESH WEATHER</button>
            </div> */}

        </div>
        </>
    )
}

const stpm = ( state ) => { return {
    weatherReport: state.weatherReducer.weatherReport
}}

const dtpm = ( dispatch ) => { return {
    findWeatherForCity: (city) => {
        console.log(city)
        weatherService.findWeatherForCity(city)
            .then(weatherReport => dispatch({
            type: "FIND_WEATHER_FOR_CITY",
            weatherReport
            }))}

}}

export default connect ( stpm , dtpm ) ( WeatherReport )