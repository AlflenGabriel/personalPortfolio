import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {TbComponents} from 'react-icons/tb'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {Link} from 'react-scroll'

const Nav = () => {

  return (
    <nav>
      <ul>
      <li className='nav-item'>
      <Link to="Header" spy={true} smooth={true} offset={-40} duration={100}>
	    <AiOutlineHome />
      </Link></li>
      <li className='nav-item'>
      <Link to="About" spy={true} smooth={true} offset={55} duration={100}>
	    <AiOutlineUser />
      </Link></li>
      <li className='nav-item'>
      <Link to="Experience" spy={true} smooth={true} offset={60} duration={100}>
	    <BiBook />
      </Link></li>
      <li className='nav-item'>
      <Link to="Portfolio" spy={true} smooth={true} offset={60} duration={100}>
	    <TbComponents />
      </Link></li>
      <li className='nav-item'>
      <Link to="Contact" spy={true} smooth={true} offset={60} duration={100}>
	    <BiMessageSquareDetail />
      </Link></li>
      </ul>
    </nav>
  )
}

export default Nav