import React from 'react';
import { connect } from 'react-redux';

const Trail = (
    {
        trail
    }
) => {

        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        {trail.resort}
                    </div>
                    <div className="col-3">
                        {trail.section}
                    </div>
                    <div className="col-3">
                        {trail.trailName}
                    </div>
                    <div className="col-3">
                        {trail.trailRating}
                    </div>
                </div>
            </div>
            </>
        );
}

const stpm = ( state ) => ({
    trail: state.trailReducer.trail
});

const dtpm = ( dispatch ) => ({});

export default connect ( stpm , dtpm ) ( Trail )