import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import TrailList from './trail-list';
import MountainHeader from './mountain-header';
import weatherService from '../services/weather-service';
import { findTrailsForMountain } from '../services/trail-service';
import { findMountainById } from '../services/mountain-service';

const MountainView = (
    {
        findWeatherForCity,
        weatherReport,
    }
) => {

    const { mountainId } = useParams();
    const [trailsForMountain, setTrailsForMountain] = useState([])
    const [mountain, setMountain] = useState({})

    useEffect(() => {
        if(mountain !== "undefined" && typeof mountain !== "undefined"){
            findMountainById(mountainId)
            .then((res) => setMountain(
                JSON.stringify(res)
            ))
        }
        if(trailsForMountain !== "undefined" && typeof trailsForMountain !== "undefined"){
            findTrailsForMountain(mountainId)
                .then((res) => setTrailsForMountain(
                    ...trailsForMountain,
                    res
                ));
            }
        if(weatherReport !== "undefined" && typeof weatherReport !== "undefined"){
            findWeatherForCity(mountain.name);
        }
        console.log(mountainId)
        console.log("mountain" + mountain)
    }, [mountainId])

    return(
        <>
        {/* <h1>{mountain.name}</h1>
        <h3>weather location: {weatherReport.name}</h3>
        <button onClick={() => findWeatherForCity(mountainId)}>REFRESH WEATHER</button>
        <h6>weather into will go here</h6>
        <h6>photo/map widget?</h6>
        <h6>should have a mountain-header component?</h6> */}
        {/* TODO pass trail CRUD to TrailList */}
        <TrailList trails={trailsForMountain}></TrailList>
        </>
    )
}

const stpm = ( state ) => {
    return {
        weatherReport: state.weatherReducer.weatherReport
    }
}

const dtpm = ( dispatch ) => {
    return {
        findWeatherForCity: (city) => {
            weatherService.findWeatherForCity(city)
            .then(weatherReport => dispatch({
                type: "FIND_WEATHER_FOR_CITY",
                weatherReport
            }))
            .then(weatherReport => console.log(weatherReport))
        }
    }
}

// const dtpm = ( dispatch ) => ({ return {
//     findWeatherForCity: (city) => {
//         weatherService.findWeatherForCity(city)
//         .then(response => console.log(response))
//     }
// }
// });

// Here, should call the trail reducer/service and load trails for the mountain in question. Will parse mountain (id or name) from URL with useParams and pass to findTrailsByMountain function
// Will then pass trailsForMountain down to trail-list component

export default connect ( stpm , dtpm ) ( MountainView )