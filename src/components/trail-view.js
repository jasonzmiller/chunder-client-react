import React , { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findTrailbyId } from '../services/trail-service';
import { createWarningForTrail , findWarningsForTrail , deleteWarning , updateWarning } from '../services/warning-service';

const TrailView = () => {

    const { trailId , mountainId } = useParams();
    const [ trail , setTrail ] = useState();
    const [ warningsForTrail , setWarningsForTrail ] = useState();
    const [ cachedWarnings, setCachedWarnings ] = useState([]);

    useEffect(() => {
        findTrailbyId(trailId).then(res => setTrail(res))
        findWarningsForTrail(mountainId, trailId).then(res => setWarningsForTrail(res))
    }, [mountainId, trailId, setTrail, setWarningsForTrail])

    return(
        <>
        <ul className="list-group" style={{padding: '20px'}}>
            <li className="list-group-item">
                <h4>Name: {trail ? trail.trailName : "Loading..."}</h4>
            </li>

            <li className="list-group-item">
                <h4>Section: {trail ? trail.section : "Loading..."}</h4>
            </li>

            <li className="list-group-item">
                <h4>Rating: {trail ? trail.trailRating : "Loading..."}</h4>
            </li>

            <li className="list-group-item">
                <h4>Status: {trail ? trail.trailStatus : "Loading..."}</h4>
            </li>

            <li className="list-group-item">
                <ul className="list-group">
                    <h4>Warnings:</h4>
                    {
                        warningsForTrail &&
                        warningsForTrail.map(warning =>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-4">
                                        {warning.name}
                                    </div>
                                    <div className="col-4">
                                        Votes: {warning.votes}
                                    </div>
                                    <div className="col-4">
                                        <div className="btn-group" role="group">
                                            <button 
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={() => {
                                                    updateWarning(warning._id, {
                                                        votes: warning.votes + 1
                                                    })
                                                }}
                                            >
                                                UPVOTE
                                            </button>
                                            <button 
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => {
                                                    deleteWarning(warning._id)
                                                }}
                                            >
                                                DELETE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </li>

            <li className="list-group-item">
                <ul className="list-group">
                    <h6>Add warnings for trail</h6>
                    <li className="list-group-item">
                        <input 
                            className="form-check-input"
                            type="checkbox"
                            value="trees"
                            id="treeCheck"
                            onChange={(e) => {
                                e.target.checked ? setCachedWarnings([...cachedWarnings, e.target.value]) : setCachedWarnings(cachedWarnings.filter(warning => warning === "trees" ? false : true))
                            }}
                        ></input>
                        <label
                            className="form-check-label"
                            htmlFor="treeCheck"
                        >
                            Trees
                        </label>
                    </li>

                    <li className="list-group-item">
                        <input 
                            className="form-check-input"
                            type="checkbox"
                            value="deep powder"
                            id="powderCheck"
                            onChange={(e) => {
                                e.target.checked ? 
                                    setCachedWarnings([...cachedWarnings, e.target.value]) :
                                    setCachedWarnings(cachedWarnings
                                        .filter(warning => warning === "deep powder" ? false : true))
                            }}
                        ></input>
                        <label
                            className="form-check-label"
                            htmlFor="powderCheck"
                        >
                            Deep powder
                        </label>
                    </li>

                    <li className="list-group-item">
                        <input 
                            className="form-check-input"
                            type="checkbox"
                            value="icy"
                            id="icyCheck"
                            onChange={(e) => {
                                e.target.checked ?
                                    setCachedWarnings([...cachedWarnings, e.target.value]) :
                                    setCachedWarnings(cachedWarnings
                                        .filter(warning => warning === "icy" ? false : true))
                            }}
                        ></input>
                        <label
                            className="form-check-label"
                            htmlFor="icyCheck"
                        >
                            Icy
                        </label>
                    </li>

                    <li className="list-group-item">
                        <input 
                            className="form-check-input"
                            type="checkbox"
                            value="rocky"
                            id="rockyCheck"
                            onChange={(e) => {
                                e.target.checked ?
                                    setCachedWarnings([...cachedWarnings, e.target.value]) :
                                    setCachedWarnings(cachedWarnings
                                        .filter(warning => warning === "rocky" ? false : true))
                            }}
                        ></input>
                        <label
                            className="form-check-label"
                            htmlFor="rockyCheck"
                        >
                            Rocky
                        </label>
                    </li>

                    <li className="list-group-item">
                        <input 
                            className="form-check-input"
                            type="checkbox"
                            value="cliffs"
                            id="cliffsCheck"
                            onChange={(e) => {
                                e.target.checked ?
                                    setCachedWarnings([...cachedWarnings, e.target.value]) :
                                    setCachedWarnings(cachedWarnings
                                        .filter(warning => warning === "cliffs" ? false : true))
                            }}
                        ></input>
                        <label
                            className="form-check-label"
                            htmlFor="cliffsCheck"
                        >
                            Cliffs
                        </label>
                    </li>
                    <li className="list-group item">
                        <button onClick={() => cachedWarnings.map(warning => {
                            createWarningForTrail({
                                name: warning,
                                trailId
                            })
                        })}
                        >
                            Add warning
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
        </>
    )
}

export default TrailView