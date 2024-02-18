import React from 'react'
import logo from '../Teaching-rafiki.png'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    
    <div className="home">
        <div className='container d-flex justify-content-between'>
            <div className='home-content d-flex flex-column justify-content-center'>
                <h2>The free,fun and effective way to learn</h2>
                <button className="button1"><Link to="/signup">Get Started</Link></button>
                <button className="button2"><Link to="/login">I already have an account</Link></button>
            </div>
            <div>
                <img src={logo} alt='logo' className="home-image" />
            </div>
        </div>
    </div>
    
  )
}

export default Home