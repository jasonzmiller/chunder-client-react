import React from 'react';

const TrailWarnings = (
    {
        trailWarnings=[]
    }
) => {
    return(
        <>
        <ul className="list-group">
            <h6>mouseover tooltip showing the text for warning?</h6>
            {
                trailWarnings.map((warning) => 
                <li className="list-group-item">
                    {
                        warning === "Trees" &&
                        <i className="fas fa-tree">{warning}</i>
                    }
                    {
                        warning === "Deep powder" &&
                        <i className="fas fa-snowman">{warning}</i>
                    }
                    {
                        warning === "Icy" &&
                        <i className="fas fa-icicles">{warning}</i>
                    }
                    {
                        warning === "Rocky" &&
                        <i className="fas fa-skull-crossbones">{warning}</i>
                    }
                    {
                        warning === "Cliffs" &&
                        <i className="fas fa-industry">{warning}</i> 
                    }
                </li>)
            }
        </ul>
        </>
    )
}

export default TrailWarnings