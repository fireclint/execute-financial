import React from 'react'
import john from './images/john-doe.png'
import './About.css'
import cat from './images/cat.png'


const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={cat} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Maxint is an easy and proven way to manage your money, providing a secure and ad-free place you need to maximize your interest.</p>
                    <p>I am Cat Doe, a senior advisor for an independently owned financial planning company called MaxInt.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
