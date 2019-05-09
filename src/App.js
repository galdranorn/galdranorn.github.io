import React from 'react';
//import logo from './logo.svg';

import { Menu } from './components/Menu/Menu';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Technologies } from './components/Technologies/Technologies';
import { Contact } from './components/Contact/Contact';

import './App.scss';

export class App extends React.Component {
  render() {
    return (
      <div id='App' className='App'>
          <Menu />
          <Hero />
          <About />
          <Portfolio />
          <Technologies />
          <Contact />

      </div>
    );
  }
}

export default App;
