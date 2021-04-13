import React, { useState } from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
    
    state = {
       users: []
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
            <h1>
                {this.state.users.username}
            </h1>
        </div>
    )

    }
}