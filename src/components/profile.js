import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { findMountainById } from '../services/mountain-service';
import Navbar from './navbar';


export default class Profile extends React.Component {
    
    state = {
       users: [],
       mountainsForUser: [],
       mountainObjects: [],
       redirect_path:''
    }

    getUser = () => {
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        }).then((res) => res.data);
    }

    Logout = () => {
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/logout"
        }).then(window.location = '/')
    }
    
    componentDidMount(){
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        })
            .then(res => {
                const users = res.data;
                if(users === undefined){
                    this.setState({
                        redirect_path:'/login'
                    })
                }
                const mountainsForUser = users.mountains;
                this.setState({ users });
                this.setState({ mountainsForUser })
                console.log(res.data)
                console.log(users.username)
                console.log(mountainsForUser)
            })
    }

    

    
    
    render(){
    if(this.state.redirect_path === '/login'){
        return(
            <Redirect push to={'/login'}/>
        )
    } else {
    return (
        <>
        <Navbar></Navbar>
            <div style={{paddingTop: '20px'}}>
                <div className="row">
                    <div>
                        <h4>Hello, {this.state.users.username}!</h4>
                    </div>
                    <button onClick={() => this.Logout()}>Logout</button>
                </div>
                <div>
                    <button
                    onClick={() => this.state.mountainsForUser.map((mid) => {
                        console.log("Finding" + mid);
                        findMountainById(mid)
                            .then(res => {
                                console.log(res)
                                const mtnToAdd = res;
                                this.setState({
                                    mountainObjects: [
                                        ...this.state.mountainObjects,
                                        mtnToAdd
                                    ]
                                })
                                console.log(this.state.mountainObjects)
                            })
                    })}
                    >Find Mountains</button>
                    <Link to = {`${this.state.users._id}/mountains/`}>
                        <button>Browse Mountains</button>
                    </Link>
                </div>
                <div className="row">
                    {
                        this.state.mountainObjects &&
                        this.state.mountainObjects.map(mountain => 
                            <div className="col-4">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <img style={{height: "20rem", width: "26rem"}} src="https://images.unsplash.com/photo-1532124957326-34c5605398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"></img>
                                    </li>
                                    <li className="list-group-item">
                                        Name: <Link to={`/mountains/${mountain._id}`}>{mountain.name}</Link>
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
        </>
    )

        }
    }
}