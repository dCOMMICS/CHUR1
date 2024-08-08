import React from 'react'
import './NavBar.css'
// import logo

const NavBar = () => {
  return (
    <nav className='container'>

        {/* ADD IMAGES LATER WJEN URJ HAFLY DONE */}
        {/* {logo} on the src path */}
      <img src = "" alt = "CHT LOGO" className='logo'/>
      <ul> 
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li> <button className='btn'>Contact us </button> </li>
      </ul>
    </nav>
  )
}

export default NavBar
