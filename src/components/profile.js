import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import mountainService from '../services/mountain-service'

export default class Profile extends React.Component {
    
    state = {
       users: [],
       mountainsForUser: []
    }

    /*
    getUser(){
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        }).then((res) => {
            console.log(res)
            const user = res.data;
            this.setState({ user })
        });
    }
    */

    componentDidMount(){
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        })
            .then(res => {
                const users = res.data;
                this.setState({ users });
                console.log(res.data)
                console.log(users.username)
            })
    }

    
    render(){
    return (
        <div>
            <div className="row">
                <div>
                    <h4>Hello, {this.state.users.username}!</h4>
                </div>
            </div>
            <div>
                <h3>Here are your favorites:</h3>
            </div>
            <div className="row">
                {
                    this.state.mountainsForUser &&
                    this.state.mountainsForUser.map(mountain => 
                        <div className="col-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <img style={{height: "20rem", width: "26rem"}} src="https://images.unsplash.com/photo-1532124957326-34c5605398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"></img>
                                </li>
                                <li className="list-group-item">
                                    Name: <Link to={`/mountains/${mountain.name}`}>{mountain.name}</Link>
                                </li>
                                <li className="list-group-item">
                                    City: {mountain.city}
                                </li>
                                <li className="list-group-item">
                                    State: {mountain.state}
                                </li>
                            </ul>
                        </div>)
                }
            </div>
        </div>
    )

    }
}