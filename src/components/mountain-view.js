import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import TrailList from './trail-list';
import WeatherReport from './weather-report';
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
                .then(res => setMountain(res))
        }
        
        if(trailsForMountain !== "undefined" && typeof trailsForMountain !== "undefined"){
            findTrailsForMountain(mountainId)
                .then((res) => setTrailsForMountain(
                    ...trailsForMountain,
                    res
                ));
            }
        
        /* if(weatherReport !== "undefined" && typeof weatherReport !== "undefined"){
            findWeatherForCity(mountain.name)
        } */
    }, [mountainId])

    // utility function to convert a string to title case
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    const [editingMountain, setEditingMountain] = useState(false)
    const [cachedName, setCachedName] = useState("");
    const [cachedCity, setCachedCity] = useState("");
    const [cachedState, setCachedState] = useState("");

    return(
        <>
        <div className="row">
            <div className="col-6">
            {
                !editingMountain &&
                <>
                <div className="col-12">
                    <h3>
                        {mountain.name}
                    <i className="fa fa-edit" onClick={() => setEditingMountain(true)}></i>
                    <i className="fa fa-heart" onClick={() => alert("TODO:\nif user is logged in\nadd this resort to favorites")}></i>
                    </h3>
                </div>
                <div className="col-6">
                    <h5>{mountain.city}, {mountain.state}</h5>
                </div>
                </>
            }
            {
                editingMountain &&
                <>
                <ul className="list-group">
                    <li className="list-group-item">
                        <label>Mountain Name</label>
                        <input onChange={(e) => setCachedName(e.target.value)} defaultValue={mountain.name} className="form-control"></input>

                        <label>City</label>
                        <input onChange={(e) => setCachedCity(e.target.value)} defaultValue={mountain.city} className="form-control"></input>

                        <label>State</label>
                        <input onChange={(e) => setCachedState(e.target.value)} defaultValue={mountain.state} className="form-control"></input>
                    </li>
                    <li className="list-group-item">
                        <button className="btn btn-danger" onClick={() => setEditingMountain(false)}>Update Mountain</button>
                    </li>
                    
                </ul>
                </>
            }
            </div>
            <div className="col-6">
                {
                    mountain &&
                    <WeatherReport mountain={mountain}></WeatherReport>
                }
            </div>
        </div>
        <TrailList trails={trailsForMountain}></TrailList>
        </>
    )
}

export default MountainView

/*
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
            .then(weather => console.log(weather))
        }
    }
}

// Here, should call the trail reducer/service and load trails for the mountain in question. Will parse mountain (id or name) from URL with useParams and pass to findTrailsByMountain function
// Will then pass trailsForMountain down to trail-list component

export default connect ( stpm , dtpm ) ( MountainView )
*/