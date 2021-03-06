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

// const stpm = ( state ) => ({
//     trailsForMountain: state.trailReducer.trailsForMountain
// });

// const dtpm = ( dispatch ) => ({
//     findTrailsForMountain: (mountain) => {
//         trailService.findTrailsForMountain(mountain)
//         .then(trailsForMountain => dispatch({
//             type: "FIND_TRAILS_FOR_MOUNTAIN",
//             mountain
//         }))
//     }
// });

// export default connect ( stpm , dtpm ) ( TrailList )