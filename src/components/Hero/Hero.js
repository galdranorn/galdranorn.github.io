import React from 'react';
import { FormattedMessage } from "react-intl";
import Typed from "typed.js";
import $ from "jquery";
import './Hero.scss';

export class Hero extends React.Component {
    componentDidMount() {
        let options = {
            strings: ["front-end developer", "React's enthusiast", "coder with passion"],
            backSpeed: 40,
            typeSpeed: 40,
            loop: true
        }
        $('document').ready(function(){
            let typed = new Typed('#typed', options);
        });
    }


    render() {
        return (
            <header id='Hero' className='Hero'>
                <div className='Hero-text container'>
                    <div data-aos='fade-down'>
                        <p className='Hero-text--hi'><FormattedMessage id='Hero-hi'/></p>
                        <h1 className='Hero-text--name'>Justyna<br/> Skiberowska</h1>
                    </div>
                    <h2 className='Hero-text--position' data-aos='fade-up'>
                    Junior <span id="typed"></span>
                    </h2>
                </div>
            </header>
        )
    }
}