import React , { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrailList from './trail-list';

const MountainView = (
    {
        mountain={
            name: "vail",
            city: "vail",
            state: "co"
        },
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
                mountain: "Vail",
                section: "Northwoods",
                trailName: "South Rim",
                trailRating: "Double Black Diamond",
                trailStatus: "Open",
                trailWarnings: ["Icy", "Rocky", "Cliffs"]
            }
        ]
    }
) => {

    // useParams to get mountainId:
        // use mountain-reducer to get mountain itself
        // once we have mountain itself, we can use its attributes to find weather
    const { mountainId } = useParams()

    return(
        <>
        <h1>{mountain.name}</h1>
        <h6>weather into will go here</h6>
        <h6>photo/map widget?</h6>
        <h6>should have a mountain-header component?</h6>
        {/* TODO pass trail CRUD to TrailList */}
        <TrailList trails={trailsForMountain}></TrailList>
        </>
    )
}

const stpm = ( state ) => ({});

const dtpm = ( dispatch ) => ({});

// Here, should call the trail reducer/service and load trails for the mountain in question. Will parse mountain (id or name) from URL with useParams and pass to findTrailsByMountain function
// Will then pass trailsForMountain down to trail-list component

export default MountainView