import React , { useState } from 'react';
import {useParams} from 'react-router-dom';
import trailService from '../services/trail-service';

const CreateTrail = ({
    createTrail
}) => {

    const [cachedName, setCachedName] = useState("");
    const [cachedSection, setCachedSection] = useState("");
    const [cachedRating, setCachedRating] = useState("");
    const [cachedStatus, setCachedStatus] = useState("");
    const [cachedWarnings, setCachedWarnings] = useState([]);
    
    const { mountainId } = useParams();

    return(
        <>
        <li className="list-group-item">
                <label>trail name</label>
                <input onChange={(e) => setCachedName(e.target.value)} className="form-control"></input>

                <label>trail section</label>
                <input onChange={(e) => setCachedSection(e.target.value)} className="form-control"></input>
                
                <label>trail rating</label>
                <input onChange={(e) => setCachedRating(e.target.value)} className="form-control"></input>

                <label>trail status</label>
                <input onChange={(e) => setCachedStatus(e.target.value)} className="form-control"></input>

                {/* <label>trail warnings</label>

                <div><button onClick={() => console.log(cachedWarnings)}>console: cached warnings</button></div>
                <div>
                    <ul>
                        <li>
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
                                class="form-check-label"
                                for="treeCheck"
                            >
                                Trees
                            </label>
                        </li>

                        <li>
                            <input 
                                className="form-check-input"
                                type="checkbox"
                                value="deep powder"
                                id="powderCheck"
                                onChange={(e) => {
                                    e.target.checked ? setCachedWarnings([...cachedWarnings, e.target.value]) : setCachedWarnings(cachedWarnings.filter(warning => warning === "deep powder" ? false : true))
                                }}
                            ></input>
                            <label
                                class="form-check-label"
                                for="powderCheck"
                            >
                                Deep powder
                            </label>
                        </li>

                        <li>
                            <input 
                                className="form-check-input"
                                type="checkbox"
                                value="icy"
                                id="icyCheck"
                                onChange={(e) => {
                                    e.target.checked ? setCachedWarnings([...cachedWarnings, e.target.value]) : setCachedWarnings(cachedWarnings.filter(warning => warning === "icy" ? false : true))
                                }}
                            ></input>
                            <label
                                class="form-check-label"
                                for="icyCheck"
                            >
                                Icy
                            </label>
                        </li>

                        <li>
                            <input 
                                className="form-check-input"
                                type="checkbox"
                                value="rocky"
                                id="rockyCheck"
                                onChange={(e) => {
                                    e.target.checked ? setCachedWarnings([...cachedWarnings, e.target.value]) : setCachedWarnings(cachedWarnings.filter(warning => warning === "rocky" ? false : true))
                                }}
                            ></input>
                            <label
                                class="form-check-label"
                                for="rockyCheck"
                            >
                                Rocky
                            </label>
                        </li>

                        <li>
                            <input 
                                className="form-check-input"
                                type="checkbox"
                                value="cliffs"
                                id="cliffsCheck"
                                onChange={(e) => {
                                    e.target.checked ? setCachedWarnings([...cachedWarnings, e.target.value]) : setCachedWarnings(cachedWarnings.filter(warning => warning === "cliffs" ? false : true))
                                }}
                            ></input>
                            <label
                                class="form-check-label"
                                for="cliffsCheck"
                            >
                                Cliffs
                            </label>
                        </li>
                    </ul>
                </div> */}
                {/* <select className="form-control" multiple onChange={e => console.log(e)} >
                    <option 
                        value="trees"
                        onClick={(e) => {
                            setCachedWarnings(...cachedWarnings, e.target.value)
                            console.log(cachedWarnings)
                        }}
                    >Trees</option>
                    <option 
                        value="deep powder"
                        onClick={(e) => {
                            setCachedWarnings(...cachedWarnings, e.target.value)
                            console.log(cachedWarnings)
                        }}
                    >Deep powder</option>
                    <option 
                        value="icy"
                        onClick={(e) => {
                            setCachedWarnings(...cachedWarnings, e.target.value)
                            console.log(cachedWarnings)
                        }}
                    >Icy</option>
                    <option value="rocky">Rocky</option>
                    <option value="cliffs">Cliffs</option>
                </select> */}
                
                <br></br>

                <button 
                    onClick={() => {trailService.createTrailForMountain(
                        {
                            mountainId: mountainId,
                            trailName: cachedName,
                            section: cachedSection,
                            trailRating: cachedRating,
                            trailStatus: cachedStatus,
                            warnings: undefined
                        }
                    )}} // createTrail with cached items
                    className="btn btn-success form-control">
                        Create trail
                </button>
            </li>
        </>
    )
}

export default CreateTrail