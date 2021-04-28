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
            <Link to={'/login'} style={{textDecoration: 'none', color: 'white'}}>
                <h1>Sender</h1>
            </Link>
        </div>
    </div>
    </body>
    </>
    )
}

export default Home