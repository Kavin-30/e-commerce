import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import { Instagram } from 'react-bootstrap-icons'
import { Whatsapp } from 'react-bootstrap-icons'
import {Pinterest} from 'react-bootstrap-icons'

export const Footer = () => {
  return (
    <div className="container">
      <div className="container-footer-logo">
        <img src={logo} alt="" />
        <p>TRUZ</p>
      </div>
      <ul className="footer">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="container-social-icons">
        <div className="container-footer-icons ">
          <h2><Instagram/></h2>
          <h2><Whatsapp/></h2>
          <h2><Pinterest/></h2>
        </div>
      </div>
      <div className="container-footer-copyrights">
        <hr />
        <p>Copyright @ 2023 by Kavin Matheswaran - All Rights Reserved.</p>
      </div>
    </div>
  )
}
