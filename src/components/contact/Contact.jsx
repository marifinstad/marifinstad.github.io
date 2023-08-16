import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'



const Contact = () => {


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>


      <div className="container contact_container">
        <div className="contact__options">

          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mari.finstad@hotmail.com</h5>
            <a href="mailto:mari.finstad@hotmail.com" target='__blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Mari Finstad</h5>
            <a href="https://www.linkedin.com/in/mari-finstad-4b4468212/" target='__blank'>Check out my profile</a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Telephone</h4>
            <h5>+47 95 09 66 56 </h5>
            <a href=' ' > Call me </a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS*/}
      </div>
    </section>
  )
}

export default Contact