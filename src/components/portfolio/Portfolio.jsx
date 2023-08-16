import React from 'react'
import './Portfolio.css'
import trEAT from '../../assets/portfolio2.png'
import flatFlow from '../../assets/flatflow.png'


const data = [
  {
    id: 1,
    image: trEAT,
    title: 'trEAT',
    github: 'https://github.com/marcusbirkeland/trEAT/tree/main',
    info: 'Group project from course TDT4140 - Programvareutvikling. An app where you and your friends can share, review and like eachothers recipes. Cooking should be inspiring!'
  },
  {
    id: 2,
    image: flatFlow,
    title: 'FlatFlow',
    github: 'https://www.figma.com/proto/mUqCpIpNUOO5bLyzC5fyR6/2.-Iterasjon?type=design&node-id=1-2&t=rxWWz46auU27gz8L-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2',
    info: 'Group project done in figma from course TPK4115 - Praktisk prosjektledelse. This is a MVP prototype for an app that can be used by roomates to resolve common conflicts within a household.'
  },

]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,info}) => {
          return (
            <article  key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3> {title}</h3>
            <h5>{info}</h5>
             <div className="portfolio__item-cta">
               <a href= {github} className='btn' target ='__blank'>Link to project</a>
              </div>
          </article>
          )
        })
      }


      </div>
    </section>
  )
}

export default Portfolio