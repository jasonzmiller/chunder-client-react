import React from 'react';
import { connect } from 'react-redux';

const TrailList = ({trailsForMountain=[]}) => {

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

const stpm = ( state ) => ({
    trailsForMountain: state.trailReducer.trailsForMountain
});

const dtpm = ( dispatch ) => ({

});

export default connect ( stpm , dtpm ) ( TrailList )