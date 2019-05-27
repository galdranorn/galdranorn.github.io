import React from 'react';
import { FormattedMessage } from "react-intl";
import Typed from "typed.js";
import $ from "jquery";
import './Hero.scss';

export class Hero extends React.Component {

    render() {
        $('document').ready(function(){
            let typed = new Typed('#typed', {
            strings: ["front-end developer", "React's enthusiast", "coder with passion"],
            backSpeed: 40,
            typeSpeed: 40,
            loop: true
            });
        });

        return (
            <div id='Hero' className='Hero'>
                <div className='Hero-text container'>
                    <p className='Hero-text--hi'><FormattedMessage id='Hero-hi'/></p>
                    <h1 className='Hero-text--name'>Justyna<br/> Skiberowska</h1>
                    <h2 className='Hero-text--position'>
                    Junior <span id="typed"></span>
                    </h2>
                </div>
            </div>
        )
    }
}