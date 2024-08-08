import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>


      <div className='hero-text'>
        <h1>
            {/* remember to change copy */}
            We Ensure better eductation performance for a better world
        </h1>
        <p>
            Our cutting-edge curriculum is designed to empower students with knowledge, skills, and experiences needed to improve in the dynamic field of education.
        </p>
        <button className='btn'>Explore more <img src='' alt='' /> </button>
      </div>
    </div>
  )
}

export default Hero
