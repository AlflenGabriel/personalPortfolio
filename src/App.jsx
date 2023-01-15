import React, {useEffect, useState} from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {

  useEffect(() => {
    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='sections'>
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact /> 
      </div>
      <Nav/>
      <Footer />
    </>
  )
}

export default App