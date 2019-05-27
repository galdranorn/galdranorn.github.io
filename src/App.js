import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from "react-intl";

import plLocaleData from "react-intl/locale-data/pl";
import enLocaleData from "react-intl/locale-data/en";
import { setLanguage } from "./actions/locale";
import messages from "./messages";

//import logo from './logo.svg';

import { Menu } from './components/Menu/Menu';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Technologies } from './components/Technologies/Technologies';
import { Contact } from './components/Contact/Contact';

import './App.scss';

addLocaleData(plLocaleData);
addLocaleData(enLocaleData);

export class App extends React.Component {
  
  render() {
    return (
      <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]}>
        <div id='App' className='App'>
            <Menu setLanguage={this.props.setLanguage}/>
            <Hero />
            <About />
            <Portfolio projects={this.props.projects}/>
            <Technologies />
            <Contact />
        </div>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
      lang: state.locale.lang,
      projects: state.projects,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setLanguage}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
