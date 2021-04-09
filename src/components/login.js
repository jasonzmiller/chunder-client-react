import React, { useState } from 'react';
import '../styles/login.css'

const Login = () => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    return (
        <>
            <div className="container">
                <div className="login">
                    <h1>Login</h1>
                    <input
                        type="text"
                        placeholder="Username..."
                    />
                    <input
                        type="password"
                        placeholder="Password..."
                    />
                    <input
                        type="submit"
                        value="submit"
                    />
                </div>
            </div>
        </>
    )
}

export default Login