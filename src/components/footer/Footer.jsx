import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer> 
      <a href="#" className='footer__logo'>ALFLEN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/alflengabriel/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/AlflenGabriel" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/alflengabriel/" target="_blank"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AlflenGabriel. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer