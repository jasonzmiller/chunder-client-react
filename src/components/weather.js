import React , { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import weatherService, { findWeatherForCity } from '../services/weather-service';
import { useFetchJSON } from './useFetchJSON';
import { findMountainById } from '../services/mountain-service';

const Weather = () => {
    
    const [ weatherReport , setWeatherReport ] = useState();
    const [ mountain , setMountain ] = useState();

    const { mountainId } = useParams();

    useEffect(() => {
        findMountainById(mountainId).then(res => setMountain(res))
    }, [])

    return(
        <>
        <div className="col-6">
        {
            !weatherReport
            ?
            <button
                    className="btn btn-secondary"
                    onClick={() =>
                        findWeatherForCity(mountain.city)
                            .then(res => setWeatherReport(res))
                    }
                >
                    Get weather
            </button>
            :
            <>
            <div className="col-12">
                Current weather: {weatherReport.weather[0].main}
            </div>
            <div className="col-12">
                Temperature (C): {Math.round(weatherReport.main.temp - 273.15)}
            </div>
            <div className="col-12">
                Wind: {weatherReport.wind.speed}
            </div>
            <div className="col-12">
                <button 
                    className="btn btn-warning" 
                    onClick={() => {
                        findWeatherForCity(mountain.city)
                            .then(res => setWeatherReport(res))
                        }}>REFRESH WEATHER
                </button>
            </div>
            </>
        }
        {
            mountain
            ?
            <div>
                {/* <button
                    className="btn btn-secondary"
                    onClick={() =>
                        findWeatherForCity(mountain.city)
                            .then(res => setWeatherReport(res))
                    }
                >
                    Get weather
                </button> */}
            </div>
            :
            <div>
                <h1>LOADING</h1>
            </div>
        }
        </div>
        </>
    )
}

export default Weather

/* const Weather = () => {

    const { mountainId } = useParams();

    const { mountain , isMountainLoading } = useFetchJSON("http://localhost:4000/mountains/6085c3876180014decf81632")

    const [ city, setCity ] = useState(mountainId)
    const [cityCache, setCityCache] = useState("")

    const { data , loading } = useFetchJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01911f7b486c0e1468d2f43de9366608`)

    return(
        <>
        <div>
            <input
                onChange={e => setCityCache(e.target.value)}
            />
        </div>

        <div>
            <button onClick={() => setCity(cityCache)}>SUBMIT</button>
        </div>

        <div>
            <h1>
                {!mountain ? 'loading...' : JSON.stringify(mountain)}
            </h1>
        </div>

        <div>
            <button onClick={() => console.log(mountain)}>console.log mountain</button>
        </div>

        <div>
            <p>Weather: {JSON.stringify(data)}</p>
        </div>
        </>
    )
}

export default Weather */

/* const Weather = ({weatherReport, findWeatherForCity}) => {

    useEffect(() => {
        findWeatherForCity("denver")
    }, [])

    return(
        <>
        <h1>Hello</h1>
        <p>{JSON.stringify(weatherReport)}</p>
        <button onClick={() => console.log(weatherReport)}>SHOW IN CONSOLE</button>
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
    

export default connect ( stpm , dtpm ) ( Weather ) */