import React from 'react'
import logo from '../Teaching-rafiki.png'

const Home = () => {
  return (
    <div className="home">
        <div className='container d-flex justify-content-between'>
            <div className='home-content d-flex flex-column justify-content-center'>
                <h2>Make Learning fun</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, nihil impedit asperiores labore perspiciatis explicabo. Quam minima, consectetur molestiae rerum nihil sapiente suscipit tenetur animi dolor, quis unde eos temporibus.</p>
            </div>
            <div>
                <img src={logo} alt='logo' className="home-image" />
            </div>
        </div>
    </div>
  )
}

export default Home