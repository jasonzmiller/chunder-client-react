import React , { useState }from 'react';
import WeatherReport from './weather-report';

const MountainHeader = ({
    mountain,
    updateMountain
}) => {

    // utility function to convert a string to title case
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    const [editingMountain, setEditingMountain] = useState(false)
    const [cachedName, setCachedName] = useState("");
    const [cachedCity, setCachedCity] = useState("");
    const [cachedState, setCachedState] = useState("");

    return(
        <>
        <div className="row">
            <div className="col-6">
            {
                !editingMountain &&
                <>
                    <div className="col-12">
                        <h3>
                            {mountain.name.toProperCase()} {/* TODO: needs to be centered */}
                            <i className="fa fa-edit" onClick={() => setEditingMountain(true)}></i>
                            <i className="fa fa-heart" onClick={() => alert("TODO:\nif user is logged in\nadd this resort to favorites")}></i>
                        </h3>
                    </div>
                    <div className="col-6">
                        <h5>{mountain.city.toProperCase()}, {mountain.state.toUpperCase()}</h5>
                    </div>
                </>
            }
            {
                editingMountain &&
                <>
                <ul className="list-group">
                    <li className="list-group-item">
                        <label>Mountain Name</label>
                        <input onChange={(e) => setCachedName(e.target.value)} defaultValue={mountain.name} className="form-control"></input>

                        <label>City</label>
                        <input onChange={(e) => setCachedCity(e.target.value)} defaultValue={mountain.city} className="form-control"></input>

                        <label>State</label>
                        <input onChange={(e) => setCachedState(e.target.value)} defaultValue={mountain.state} className="form-control"></input>
                    </li>
                    <li className="list-group-item">
                        <button className="btn btn-danger" onClick={() => setEditingMountain(false)}>Update Mountain</button>
                    </li>
                    
                </ul>
                </>
            }
            </div>
            <div className="col-6">
                    <WeatherReport mountain={mountain}></WeatherReport>
            </div>
        </div>
        </>
    )
}

export default MountainHeader