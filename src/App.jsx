import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/videoplayer/videoplayer'

const App = () => {

const [playState, setPlayState] = useState(false);

  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='container'>
        <Title subTitle = " OUR PROGRAMS" title = " What we Offer"/>
        <Programs />
        <About setPlayState = {setPlayState} />
        <Title subTitle = " Gallery" title = " Campus Photos"/>
        <Campus/>
        <Title subTitle = " TESTIMONIALS" title = " What our students say"/>
      <Testimonials/>
      <Title subTitle = " Contact Us" title = "Say Hello "/>
      <Contact/>
      <Footer/>
     
      </div>
      <VideoPlayer playState = {playState} setPlayState = {setPlayState}/>
    </div>
  )
}

export default App
