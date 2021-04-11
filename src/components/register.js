import React, {useState} from 'react';
import axios from 'axios';


const Login = () => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        axios({
            method: "post",
            data: {
                username: usernameReg,
                password: passwordReg,
            },
            withCredentials: true,
            url: "http://localhost:4000/register"
        }).then((res) => console.log(res));
    }
    const getUser = () => {
    
    }

    return (
        <>
            <div className="container">
                <div className="login">
                    <h1>Register</h1>
                    <input
                        type="text"
                        placeholder="Username..."
                        onChange={e => setUsernameReg(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={e => setPasswordReg(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="submit"
                        onClick={register}
                    />
                </div>
            </div>
            <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Get User</button>
            </div>
        </>
    )
}

export default Login