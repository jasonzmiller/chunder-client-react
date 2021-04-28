import React , { useState } from 'react';
import { Link , useParams } from 'react-router-dom';
import { deleteTrail } from '../services/trail-service';
import TrailWarnings from './trail-warnings';

const Trail = (
    {
        trail
    }
) => {

    const [editing, setEditing] = useState(false)

    const [ cachedTrail , setCachedTrail ] = useState()

    const { mountainId } = useParams()

        return(
            <>
            {
                !editing &&
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Link to={`/mountains/${mountainId}/trails/${trail._id}`}>
                                {trail.trailName}
                            </Link>
                        </div>
                        <div className="col-2">
                            {trail.section}
                        </div>
                        <div className="col-2">
                            {trail.trailRating}
                        </div>
                        <div className="col-2">
                            {trail.trailStatus}
                        </div>
                        <div className="col-2">
                            <div
                                className="btn-group"
                                role="group"
                            >
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    onClick={() => setEditing(true)}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => deleteTrail(trail._id)}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                editing &&
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <input 
                                className="form-control"
                                defaultValue={trail.trailName}
                                onChange={e => setCachedTrail({...cachedTrail, trailName: e.target.value})}
                            ></input>
                        </div>
                        <div className="col-2">
                            <input className="form-control" defaultValue={trail.section}></input>
                        </div>
                        <div className="col-2">
                            <input className="form-control" defaultValue={trail.trailRating}></input>
                        </div>
                        <div className="col-2">
                            <input className="form-control" defaultValue={trail.trailStatus}></input>
                        </div>
                        <div className="col-2">
                            <div
                                className="btn-group"
                                role="group"
                            >
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    onClick={() => setEditing(false)}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => deleteTrail(trail._id)}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </>
        );
}

export default Trail

// const stpm = ( state ) => ({
//     trail: state.trailReducer.trail
// });

// const dtpm = ( dispatch ) => ({});

// export default connect ( stpm , dtpm ) ( Trail )