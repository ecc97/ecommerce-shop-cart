import React from 'react';
import Navbar from './Nav';
import HeroSection from './HeroSection';

const Header = () => {
  return (
    <header >
      <Navbar title='Navbar' links={['home', 'about', 'contact']}/>
      <HeroSection />
    </header>
  )
}

export default Header
