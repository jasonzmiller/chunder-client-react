import React from 'react';

const TrailWarnings = (
    {
        trailWarnings=[]
    }
) => {
    return(
        <>
        <ul>
            {
                trailWarnings.map((warning) => 
                <li>
                    {
                        warning === "Trees" &&
                        <i className="fas fa-tree"></i>
                    }
                    {
                        warning === "Deep powder" &&
                        <i className="fas fa-snowman"></i>
                    }
                    {
                        warning === "Icy" &&
                        <i className="fas fa-icicles"></i>
                    }
                    {
                        warning === "Rocky" &&
                        <i className="fas fa-skull-crossbones"></i>
                    }
                    {
                        warning === "Cliffs" &&
                        <i className="fas fa-industry"></i> 
                    }
                </li>)
            }
        </ul>
        </>
    )
}

export default TrailWarnings