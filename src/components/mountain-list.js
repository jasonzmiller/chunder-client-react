import React from 'react';
import { Link } from 'react-router-dom';
import CreateMountain from './create-mountain';
import axios from 'axios';
import { addMountainToUser } from '../services/mountain-service';

export default class MountainList extends React.Component {
    
    state = {
        mountains: [],
        users: []
    }
    
    componentDidMount(){
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/mountains"
        }).then((res) => {
            console.log(res);
            const mountains = res.data;
            this.setState({mountains});
        });

        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        }).then((res) => {
            console.log(res);
            const users = res.data;
            this.setState({users});
        });

        
    }
    

    
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
                <h1>{this.state.mountains.name}</h1>
                
                
            {
                this.state.mountains.map((mountain) => {
                    return(
                        <li className="list-group-item" key={mountain._id}>
                            <Link to={`/mountains/${mountain._id}`}>
                                {mountain.name}
                            </Link>
                            <i className="fas fa-plus float-right"
                            onClick={() => {
                                addMountainToUser(mountain._id, this.state.users._id)
                                console.log(`Added ${mountain.name} to user ${this.state.users.username}`)
                            }}></i>
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
const MountainList = (
    {
        mountains=[],
        users: []
    }
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
*/
/*
here we'll call the mountain-reducer
    - will pass down create function to the create-mountain component
*/
/*
const stpm = ( state ) => ({});

const dtpm = ( dispatch ) => ({});

export default MountainList
 */
