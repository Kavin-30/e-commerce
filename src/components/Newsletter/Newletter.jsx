import React from 'react'
import './Newletter.css'

export const Newletter = () => {
  return (
    <div className='newletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe For More Updates</p>
        <div>
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
