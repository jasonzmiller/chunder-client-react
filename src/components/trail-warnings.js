import React from 'react';

const TrailWarnings = (
    {
        trailWarnings=[],
        editing
    }
) => {
    return(
        <>
        {
            !editing &&
            <ul className="list-group">
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
        }
        {
            editing &&
            <select className="form-control" defaultValue={trailWarnings.map((warning) => warning)} multiple>
                <option value="trees">Trees</option>
                <option value="deep powder">Deep powder</option>
                <option value="icy">Icy</option>
                <option value="rocky">Rocky</option>
                <option value="cliffs">Cliffs</option>
            </select>
        }
        </>
    )
}

export default TrailWarnings