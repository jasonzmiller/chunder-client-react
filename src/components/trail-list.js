import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import trailService from '../services/trail-service';
import Trail from './trail';

const TrailList = (
    {
        trailsForMountain=[
            {
                mountain: "Vail",
                section: "Blue Sky Basin",
                trailName: "Champagne Glades",
                trailRating: "Black Diamond",
                trailStatus: "Open",
                trailWarnings: ["Deep powder", "Trees"]
            },
            {
                mountain: "Breckenridge",
                section: "Peak 8 Alpine",
                trailName: "Lake Chutes",
                trailRating: "Double Black Diamond",
                trailStatus: "Closed",
                trailWarnings: ["Icy", "Rocky", "Cliffs"]
            }
        ], 
        // findTrailsForMountain
    }) => {

    // useEffect(() => {
    //     findTrailsForMountain()
    // })

    return(
        <>
        <div>
            {
                trailsForMountain.map((trail) => {
                    return(
                        <Trail trail={trail}></Trail>
                    )
                })
            }
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