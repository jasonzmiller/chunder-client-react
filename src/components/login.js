import React, { useState } from 'react';
import '../styles/login.css'
import axios from 'axios';

const Login = () => {
    const login = () => {
        axios({
            method: "post",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://localhost:4000/login"
        }).then((res) => window.location = `/profile`);
    }

    const getUser = () => {
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        }).then((res) => console.log(res));
    }

    
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    

    return (
        <>
            <div className="container">
                <div className="login">
                    <h1>Login</h1>
                    <input
                        type="text"
                        placeholder="Username..."
                        onChange={e => setLoginUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={e => setLoginPassword(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="submit"
                        onClick={login}
                    />
                </div>
            </div>
        </>
    )
}

export default Login