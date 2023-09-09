/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './About.css'
import ME from '../../assets/båttur.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {BiHappyAlt} from 'react-icons/bi'


const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt ="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className = 'about__icon'/>
              <h5>Life experience</h5>
              <small>Ca. 24 years</small>
            </article>

            <article className='about__card'>
              <FaUniversity className = 'about__icon'/>
              <h5>Education</h5>
              <small> MEng in June 2025  </small>
            </article>

            <article className='about__card'>
              <BiHappyAlt className = 'about__icon'/>
              <h5>Best qualities</h5>
              <small>Driven, curious, engaged</small>
            </article>
          </div>

          <p>
          My name is Mari Finstad. <br /> I'm 24 years old and starting my 4th year of my masters (MEng) in Engineering and ICT at NTNU in Trondheim.
          As you're read this I'm actually doing my exchange year at University of Bologna in Italy! < br/>  <br/> 
          
          One of my best qualities is that I'm easily engaged - resulting in having a huge variety of hobbies and interests. Deciding to have my masters in Egineering and ICT is because I have always liked subjects with answers that have two lined underneath. 
          As I discovered the world of programming during my 1st year at NTNU, I understood that there is also a creative side to these skills - its not just 0's and 1's. Luckily, being creative in some way or another; e.g hand-crafting, designing and DIY -  has always been something that has brough me a lot of joy! <br />
          So as you can imagine, this course of study suits me very well.

          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
