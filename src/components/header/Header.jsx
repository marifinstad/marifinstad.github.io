import React from 'react'
import './Header.css'
import CTA from "./CTA.jsx"
import ME from '../../assets/skjorte.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header> 
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mari Finstad</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

        <div className="header__me-image">
            <img class='circular--square' src={ME} alt="me" />
        </div>

        <CTA />
        <HeaderSocials /> 

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header