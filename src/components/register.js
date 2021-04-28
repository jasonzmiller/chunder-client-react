import React, {useState} from 'react';
import axios from 'axios';


const Login = () => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [adminReg, setAdminReg] = useState(false)

    const register = () => {
        axios({
            method: "post",
            data: {
                username: usernameReg,
                password: passwordReg,
                isAdmin: adminReg
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
                    <select onChange={(e) => setAdminReg(e.target.value === "true" ? true : false)} className="form-control">
                        <option value="false">Skier</option>
                        <option value="true">Patroller</option>
                    </select>
                    <input
                        type="submit"
                        value="submit"
                        onClick={register}
                    />
                </div>
            </div>
        </>
    )
}

export default Login