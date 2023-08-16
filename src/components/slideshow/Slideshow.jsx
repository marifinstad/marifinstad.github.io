import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';

import './Slideshow.css'

import M1 from '../../assets/topptur.jpg'
import M2 from '../../assets/ivdagene.jpg'
import M3 from '../../assets/fisk.jpg'
import M4 from '../../assets/ntnu.jpg'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const data1 = [
    {  
        id: 1,
        image: M1,
        caption: 'I enjoy spending time outdoors; hiking in the summertime and skiing during the winter',
    },
    {
        id:2,
        image: M4,
        caption: 'Me in front of Hovedbiblioteket at NTNU in Trondheim - also my favorite place to study for my exams',
    },
    {
        id:3,
        image: M2,
        caption: 'In February 2023 I was apart of the "IV-dagene" conference as an account manager for various companies',
    },
    {
        id:4,
        image: M3,
        caption: 'Recently I have discovered that fishing is a very rewarding hobby',
    },

];

const Slideshow = () => {
  return (

    <section id='SlideShow'>
    <h5>A little bit more about me with</h5>
    <h2>Pictures that describe me</h2>

{/*
    <Carousel className='carousel'>
    {data1.map(({id,image,caption}) => {
        return(
            <div className='carousel__container'>
          <div className='carousel__container-image'> 
            <img src={image} alt={id}/>
          </div> 
          <h5 className='carousel__container-caption'>{caption}</h5>
          </div>  
        )
    })}
    </Carousel>

    
*/}<section className='slideshow__container'>
    <Carousel className='slideshow__carousel'>
        {data1.map(({id,image,caption}) => {
            return (
                <div className='carousel__slide'>
                    <img src={image} alt={id} />
                    <p className="legend1">{caption}</p>
                </div>  
            )
        })}


    </Carousel>
    </section>
    </section>
  )
}

export default Slideshow