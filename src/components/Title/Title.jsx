import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
      <p>
        {subTitle}
        {/* OUR PROGRAMS */}
      </p>
      <h2>
      {title}
        {/* What We Offer */}

      </h2>
    </div>
  )
}

export default Title
