import React from 'react'
import './Experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>How Experienced I Am With Different</h5>
      <h2>Fullstack Elements</h2>
    
      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Developmet</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Intermediate +</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate + </small>
                </div>
              </article>

            </div>
        </div>



        <div className="experience__backend">
        <h3>Backend Developmet</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>Pyhton</h4>
                  <small className='text-light'>Intermediate ++</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheck className='.experience__details-icons'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Beginner +</small>
                </div>
              </article>
            
            </div>
        </div>

      </div>
    </section>
  )
}

export default Experience