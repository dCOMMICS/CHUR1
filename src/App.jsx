import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='container'>
        <Title subTitle = " OUR PROGRAMS" title = " What we Offer"/>
        <Programs />
        <About />
        <Title subTitle = " Gallery" title = " Campus Photos"/>
        <Campus/>
        <Title subTitle = " TESTIMONIALS" title = " What our students say"/>
      <Testimonials/>
      <Title subTitle = " Contact Us" title = "Say Hello "/>
      <Contact/>
      </div>
      
    </div>
  )
}

export default App
