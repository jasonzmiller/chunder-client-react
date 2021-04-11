import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const getUser = () => {
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        }).then((res) => console.log(res));
    }

    
    
    return (
        <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Get User</button>
            </div>
    )


}

export default Profile