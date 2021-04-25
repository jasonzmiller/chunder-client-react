import React , { useState } from 'react';
import mountainService from '../services/mountain-service.js';

const CreateMountain = (
    {
        createMountain,
        findMountainByName,
        findMountainById,
        findAllMountains
    }
) => {

    const [cachedName, setCachedName] = useState("");
    const [cachedCity, setCachedCity] = useState("");
    const [cachedState, setCachedState] = useState("");

    return(
        <>
        <li className="list-group-item">
                <label>Mountain Name</label>
                <input onChange={(e) => setCachedName(e.target.value)} className="form-control"></input>

                <label>City</label>
                <input onChange={(e) => setCachedCity(e.target.value)} className="form-control"></input>

                <label>State</label>
                <input onChange={(e) => setCachedState(e.target.value)} className="form-control"></input>

                <br></br>
                
                <button 
                    onClick={() => {mountainService.createMountain(
                        {
                            name: cachedName,
                            city: cachedCity,
                            state: cachedState
                        }
                    )}} // createMountain with cached items
                    className="btn btn-success form-control">
                        Create mountain
                </button>
                <button 
                    onClick={() => {
                        mountainService.findAllMountains();
                    }}>
                        Find All Mountains
                </button>
                <button 
                    onClick={() => {
                        mountainService.findMountainByName(cachedName);
                    }}>
                        Find Mountain By Name
                </button>
        </li>
        </>
    )
}

export default CreateMountain