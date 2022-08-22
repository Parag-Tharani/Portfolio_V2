import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <>
    <div className='header__container portfolio2'><p>For more creative / childish portfolio please go to <a href='https://paragtharani24.netlify.app/' target={"_blank"} rel="noreferrer">My Portfolio 2.0</a></p></div>
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Parag Tharani</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
    </>
  )
}

export default Header