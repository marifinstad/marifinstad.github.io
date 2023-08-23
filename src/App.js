import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experiece/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Slideshow from './components/slideshow/Slideshow'
import { Analytics } from '@vercel/analytics/react';


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Slideshow/>
        <Experience />
        <Portfolio />
        <Contact /> 
        <Footer />
        <Analytics />
    </>
  )
}

export default App