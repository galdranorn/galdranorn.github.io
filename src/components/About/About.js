import React from 'react';
import { FormattedMessage } from "react-intl";
import './About.scss';

export class About extends React.Component {
    
    render() {
        return (
            <div id='About' className='About'>
                <div className='container'>
                    <div className='row'>
                        {/*<div className='col-6 col-sm-12 col-md-12 col-lg-6 About-photo' data-aos='fade-right'>
                            <div className='About-photo-box'></div>
                        </div>*/}
                        <div className='About-description'>
                            <h1 className='About-description--header' data-aos='fade-down'><FormattedMessage id='About'/></h1>
                            <div data-aos='fade-up'>
                                <p className='About-description--text'><FormattedMessage id='About-description-1'/></p>
                                <p className='About-description--text'><FormattedMessage id='About-description-2'/></p>
                                <p className='About-description--text'><FormattedMessage id='About-description-3'/></p>
                                <p className='About-description--text'><FormattedMessage id='About-description-4' /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


