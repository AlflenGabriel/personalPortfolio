import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Typewriter from "typewriter-effect";

var typewriter = new Typewriter(null, {
  loop: true,
});

const Header = () => {
  return (
    <section id='Header'>
    <div className="container header__container">
    <CTA />
    <HeaderSocials />

    <div className="me">
    <Typewriter className="typewriter" options={{
      loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString("Hello, I'm <br /> <b>Alflen Gabriel.</b>")
        .pauseFor(5000)
        .deleteAll()
        .pauseFor(2000)
        .start();
      }}
      />
    </div>

    <a href="#Contact" className='scroll__down'>Scroll Down</a>
    </div>
    </section>
  )
}

export default Header