import React , { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import CreateMountain from './create-mountain';
import axios from 'axios';

export default class MountainList extends React.Component {
    
    state = {
        mountains: [
        /*
            {
                id: 123,
                name: "breckenridge",
                city: "breckenridge",
                state: "co"
            },
            {
                id: 234,
                name: "crested butte",
                city: "crested butte",
                state: "co"
            },
            {
                id: 345,
                name: "vail",
                city: "vail",
                state: "co"
            }
            */
        ],
        users: []
    }
    
    /*
    function getUser () {
        return axios({
            method: "get",
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
            url: "http://localhost:4000/user"
        }).then((res) => res.data)
    }
    */
    componentDidMount(){
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        }).then((res) => {
            const users = res.data;
            this.setState({users});
        });
    }

    /*

    const [cachedName, setCachedName] = useState("");
    const [cachedCity, setCachedCity] = useState("");
    const [cachedState, setCachedState] = useState("");
    */
    
    render(){
        return(
            <>
            <ul className="list-group">
                <CreateMountain 
                    // createMountain={createMountain}
                ></CreateMountain>
            </ul>

            <ul className="list-group">
                <h1>Mountains</h1>
                <h1>{this.state.users.username}</h1>
                <h1>{this.state.users._id}</h1>
                
            
                
                
            {
                this.state.mountains.map((mountain) => {
                    return(
                        <li className="list-group-item">
                            <Link to={`/mountains/${mountain.id}`}>
                                {mountain.name}
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
            </>
        )
    }
}

/*
here we'll call the mountain-reducer
    - will pass down create function to the create-mountain component
*/
/*
const stpm = ( state ) => ({});

const dtpm = ( dispatch ) => ({});
*/
