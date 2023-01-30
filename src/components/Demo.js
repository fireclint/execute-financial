import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>More Than 100 Financial Articles,</p>
                    <p>One Philosophy</p>
                    <p>Take control of your finances, leave your worries behind. With maxint, your money will always be on point, never out of line </p>
                    <button className='button'>Get your account registered now</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/6twdx54rD9M' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
