import React , { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import weatherService from '../services/weather-service';

const WeatherReport = ({
    city,
    weatherReport,
    findWeatherForCity
}) => {

/*     useEffect(() => {
        if ( city !== "undefined" && typeof city !== "undefined" ){
            findWeatherForCity(city)
        }
        if ( weatherReport !== "undefined" && typeof weatherReport !== "undefined" ){
            console.log(weatherReport)
        }
    }, [city]) */

    const [ called , setCalled ] = useState(false)

    return(
        <>
        <div className="row">
                <>
                <div className="col-12">
                        Current weather: {called ? weatherReport.weather[0].main : ""}
                    </div>
                <div className="col-12">
                    Temperature (C): {called ? Math.round(weatherReport.main.temp - 273.15) : ""}
                </div>
                <div className="col-12">
                    Wind: {called ? weatherReport.wind.speed : ""}
                </div>
                <div className="col-12">
                    <button 
                        className="btn btn-warning" 
                        onClick={() => {
                            setCalled(true)
                            findWeatherForCity(city)
                            console.log(weatherReport)
                        }}>REFRESH WEATHER</button>
                </div>
                </>
        </div>
        </>
    )
}

const stpm = ( state ) => { return {
    weatherReport: state.weatherReducer.weatherReport
}}

const dtpm = ( dispatch ) => { return {
    findWeatherForCity: (city) =>
        weatherService.findWeatherForCity(city)
            .then(weatherReport => dispatch({
            type: "FIND_WEATHER_FOR_CITY",
            weatherReport
            }))
        }
}

export default connect ( stpm , dtpm ) ( WeatherReport )