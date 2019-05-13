import React from 'react';
import { FormattedMessage } from "react-intl";
import './About.scss';

export class About extends React.Component {
    
    render() {
        return (
            <div id='About' className='About'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 About-photo'>
                            <div className='About-photo-box'></div>
                        </div>
                        <div className='col-6 About-description'>
                            <h1 className='About-description--header'><FormattedMessage id='About'/></h1>
                            <p className='About-description--text'><FormattedMessage id='About-description-1'/></p>
                            <p className='About-description--text'><FormattedMessage id='About-description-2'/></p>
                            <p className='About-description--text'><FormattedMessage id='About-description-3'/></p>
                            <p className='About-description--text'><FormattedMessage id='About-description-4' /></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


