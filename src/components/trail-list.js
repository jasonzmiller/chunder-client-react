import React, { useEffect , useState , useParams } from 'react';
import { connect } from 'react-redux';
import {useParams} from "react-router-dom";
import trailService from '../services/trail-service';
import Trail from './trail';
import CreateTrail from './create-trail';

const TrailList = (
    {
        trails=[], 
        // findTrailsForMountain
    }) => {

<<<<<<< HEAD
=======
    const [cachedName, setCachedName] = useState("");
    const [cachedSection, setCachedSection] = useState("");
    const [cachedRating, setCachedRating] = useState("");
    const [cachedStatus, setCachedStatus] = useState("");
    const [cachedWarnings, setCachedWarnings] = useState([]);
    const { mountainId } = useParams();

>>>>>>> 80d74a1325bfe7f3b8f00c7ad7c7f30a088a398a
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
<<<<<<< HEAD
            <CreateTrail></CreateTrail>
=======
            <li className="list-group-item">
                <label>trail name</label>
                <input className="form-control"></input>

                <label>trail section</label>
                <input className="form-control"></input>
                
                <label>trail rating</label>
                <input className="form-control"></input>

                <label>trail status</label>
                <input className="form-control"></input>

                <label>trail warnings</label>
                <input className="form-control" placeholder="WOULD BE COOL IF THIS IS A DROP DOWN CHECKLIST"></input>
                
                <br></br>

                <button 
                    onClick={() => {trailService.createTrailForMountain(
                        mountainId,
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
>>>>>>> 80d74a1325bfe7f3b8f00c7ad7c7f30a088a398a
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