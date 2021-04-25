import React , { useState } from 'react';
import TrailWarnings from './trail-warnings';
// import { connect } from 'react-redux';

const Trail = (
    {
        trail
    }
) => {

    const [editing, setEditing] = useState(false)

        return(
            <>
            {
                !editing &&
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <i className="fas fa-edit" onClick={() => setEditing(true)}></i>
                            {trail.trailName}
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
                            <TrailWarnings trailWarnings={trail.warnings}></TrailWarnings>
                        </div>
                    </div>
                </div>
            }
            {
                editing &&
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <i className="fas fa-edit" onClick={() => setEditing(false)}></i>
                            <input className="form-control" defaultValue={trail.trailName}></input>
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
                            <TrailWarnings trailWarnings={trail.warnings} editing={editing}></TrailWarnings>
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