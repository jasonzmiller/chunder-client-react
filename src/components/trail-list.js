import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import trailService from '../services/trail-service';
import Trail from './trail';
import CreateTrail from './create-trail';

const TrailList = (
    {
        trails=[], 
        findTrailsForMountain
    }) => {

    // useEffect(() => {
    //     findTrailsForMountain()
    // })

    const { mountainId } = useParams();

    return(
        <>
        <div>
            <ul className="list-group">
            {
                trails.map((trail) => {
                    return(
                        <li className="list-group-item">
                            <Trail trail={trail}></Trail>
                        </li>
                    )
                })
            }
            <CreateTrail></CreateTrail>
            </ul>
        </div>
        </>
    );
}

export default TrailList