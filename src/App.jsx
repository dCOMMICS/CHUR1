import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='container'>
        <Title subTitle = " OUR PROGRAMS" title = " What we Offer"/>
        <Programs />
        <About />
      </div>
      
    </div>
  )
}

export default App
