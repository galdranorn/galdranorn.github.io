import React from 'react';
import { FormattedMessage } from "react-intl";
import './Hero.scss';

export class Hero extends React.Component {
    render() {
        return (
            <div id='Hero' className='Hero'>
                <div className='Hero-text'>
                    <p className='Hero-text--hi'><FormattedMessage id='Hero-hi'/></p>
                    <h1 className='Hero-text--name'>Justyna<br/> Skiberowska</h1>
                    <h2 className='Hero-text--position'>Junior front-end developer</h2>
                </div>
            </div>
        )
    }
}