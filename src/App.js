import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData, FormattedMessage } from "react-intl";

import plLocaleData from "react-intl/locale-data/pl";
import enLocaleData from "react-intl/locale-data/en";
import { setPolish, setEnglish } from "./actions/locale";
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
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    console.log(this.props)
    return (
      <IntlProvider
        locale={ this.props.lang }
        messages={ messages[this.props.lang] }
      >
        <div id='App' className='App'>
            <FormattedMessage id='sample' />
            <button onClick={() => this.props.setPolish('pl')}>PL</button>
            <button onClick={() => this.props.setEnglish()}>EN</button>
            <Menu />
            <Hero />
            <About />
            <Portfolio />
            <Technologies />
            <Contact />

        </div>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
      lang: state.locale.lang
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setPolish, 
    setEnglish
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
