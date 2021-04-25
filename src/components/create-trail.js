import React , { useState , useParams } from 'react';
import trailService from '../services/trail-service';

const CreateTrail = ({
    createTrail
}) => {

    const [cachedName, setCachedName] = useState("");
    const [cachedSection, setCachedSection] = useState("");
    const [cachedRating, setCachedRating] = useState("");
    const [cachedStatus, setCachedStatus] = useState("");
    const [cachedWarnings, setCachedWarnings] = useState([]);
    
    const { mountainId } = useParams();

    return(
        <>
        <li className="list-group-item">
                <label>trail name</label>
                <input onChange={(e) => setCachedName(e.target.value)} className="form-control"></input>

                <label>trail section</label>
                <input onChange={(e) => setCachedSection(e.target.value)} className="form-control"></input>
                
                <label>trail rating</label>
                <input onChange={(e) => setCachedRating(e.target.value)} className="form-control"></input>

                <label>trail status</label>
                <input onChange={(e) => setCachedStatus(e.target.value)} className="form-control"></input>

                <label>trail warnings</label>
                <select className="form-control">
                    <option value="trees">Trees</option>
                    <option value="deep powder">Deep powder</option>
                    <option value="icy">Icy</option>
                    <option value="rocky">Rocky</option>
                    <option value="cliffs">Cliffs</option>
                </select>
                
                <br></br>

                <button 
                    onClick={() => {trailService.createTrailForMountain(
                        mountainId,
                        {
                            mountainId: mountainId,
                            trailName: cachedName,
                            section: cachedSection,
                            trailRating: cachedRating,
                            trailStatus: cachedStatus,
                            warnings: undefined
                        }
                    )}} // createTrail with cached items
                    className="btn btn-success form-control">
                        Create trail
                </button>
            </li>
        </>
    )
}

export default CreateTrail