import React from 'react'
import '../styles/home.css'
import video from '../styles/video.mp4'
import { Link } from 'react-router-dom';
const Home = () => {
    return(
    <>
    <body>
    <div className="v-header container" id="v-header">
        <div className="fullscreen-video-wrap">
            <video loop autoPlay muted>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
            {/* <Link to={'/mountains'} style={{textDecoration: 'none', color: 'white'}}>
                <h1>Chunder</h1>
            </Link> */}
            <h1>Chunder</h1>
            <Link to={'/register'} style={{textDecoration: 'none', color: 'white'}}>
                <h1>Register</h1>
            </Link>
            <Link to={'/login'} style={{textDecoration: 'none', color: 'white'}}>
                <h1>Login</h1>
            </Link>
        </div>
    </div>
    </body>
    </>
    )
}

export default Home