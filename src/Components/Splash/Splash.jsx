import React from 'react'
import splashImg from '../../assets/images/splash.png'
import './Splash.css'

export default function Splash() {
  return (
    <div className='splash-container'>
      <img src={splashImg} />
      <p>Your introduction <span>to the world of plants</span></p>
      <div className="loader">
        <span className="loader__element"></span>
        <span className="loader__element"></span>
        <span className="loader__element"></span>
        </div>
    </div>
  )
}
