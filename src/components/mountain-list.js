import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateMountain from './create-mountain';

const MountainList = (
    {
        mountains=[
            {
                name: "breckenridge",
                city: "breckenridge",
                state: "co"
            },
            {
                name: "crested butte",
                city: "crested butte",
                state: "co"
            },
            {
                name: "vail",
                city: "vail",
                state: "co"
            }
        ]
    }
) => {

    const [cachedName, setCachedName] = useState("");
    const [cachedCity, setCachedCity] = useState("");
    const [cachedState, setCachedState] = useState("");

    return(
        <>
        <ul className="list-group">
            <CreateMountain 
                // createMountain={createMountain}
            ></CreateMountain>
        {
            mountains.map((mountain) => {
                return(
                    <li className="list-group-item">
                        <Link to={`/${mountain.name}`}>
                            {mountain.name}
                        </Link>
                    </li>
                )
            })
        }
        </ul>
        </>
    )
}

/*
here we'll call the mountain-reducer
    - will pass down create function to the create-mountain component
*/

const stpm = ( state ) => ({});

const dtpm = ( dispatch ) => ({});

export default MountainList