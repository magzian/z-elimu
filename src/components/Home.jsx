import React from 'react'
import logo from '../Teaching-rafiki.png'

const Home = () => {
  return (
    <div className="home">
        <div className='container d-flex justify-content-between'>
            <div className='home-content d-flex flex-column justify-content-center'>
                <h2>The free,fun and effective way to learn</h2>
                <button className="button1">Get Started</button>
                <button className="button2"> I already have an account</button>
            </div>
            <div>
                <img src={logo} alt='logo' className="home-image" />
            </div>
        </div>
    </div>
  )
}

export default Home