import React from 'react';
import TrailWarnings from './trail-warnings';
// import { connect } from 'react-redux';

const Trail = (
    {
        trail
    }
) => {

        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
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
                        <TrailWarnings trailWarnings={trail.trailWarnings}></TrailWarnings>
                    </div>
                </div>
            </div>
            </>
        );
}

export default Trail

// const stpm = ( state ) => ({
//     trail: state.trailReducer.trail
// });

// const dtpm = ( dispatch ) => ({});

// export default connect ( stpm , dtpm ) ( Trail )