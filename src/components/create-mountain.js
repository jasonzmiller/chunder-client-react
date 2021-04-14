import React , { useState } from 'react';

const CreateMountain = (
    {
        createMountain
    }
) => {

    // can also just have a cachedMountain, setCachedMountain but unsure if this would make any difference in terms of performance

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
                    onClick={() => {createMountain(
                        {
                            name: cachedName,
                            city: cachedCity,
                            state: cachedState
                        }
                    )}} // createMountain with cached items
                    className="btn btn-success form-control">
                        Create mountain
                </button>
        </li>
        </>
    )
}

export default CreateMountain