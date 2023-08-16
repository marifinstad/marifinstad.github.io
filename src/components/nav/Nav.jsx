import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('# ')
  return (
    <nav>
      <a href="#about" onClick={() =>setActiveNav('#about')}className={activeNav === '#about' ?  ' active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() =>setActiveNav('#experience')}className={activeNav === '#experience' ?  ' active' : ''}><BiBook/></a>
      <a href="# " className={activeNav === '# ' ?  ' active' : ''} onClick={() =>setActiveNav('# ')}><AiOutlineHome/></a>
      <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')}className={activeNav === '#portfolio' ?  ' active' : ''}><MdOutlineHomeRepairService/></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')}className={activeNav === '#contact' ?  ' active' : ''}><TiContacts/></a>
    </nav>  
  )
}

export default Nav