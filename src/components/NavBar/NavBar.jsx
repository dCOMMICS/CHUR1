import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/rhodess.png'
// import logo

const NavBar = () => {
  // used for the navigation bar scrolling effects  Wird für die Scrolleffekte der Navigationsleiste verwendet.

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener ('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <nav className={`container ${sticky ?  'dark-nav' : ''}`} >

        {/* Bild hinzufügen, wenn die Hälfte fertig ist*/}
        {/* {logo} on the src path */}
      <img src = {logo} alt = "CHT LOGO" className='logo'/>
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
