import React from 'react';

const Trail = (
    {
        resort="Vail",
        section="Blue Sky Basin",
        trailName="Champagne Glades",
        trailRating="Black Diamond"
    }
) => {

        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        {resort}
                    </div>
                    <div className="col-3">
                        {section}
                    </div>
                    <div className="col-3">
                        {trailName}
                    </div>
                    <div className="col-3">
                        {trailRating}
                    </div>
                </div>
            </div>
            </>
        );
}

export default Trail