import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Contact.scss';

export class Contact extends React.Component {
    render() {
        return (
            <div id='Contact' className='Contact'>
                <div className='container'>
                    <h1 className='Contact-header' data-aos='fade-down'>
                        <FormattedMessage id="Contact"/>
                    </h1>
                    <div data-aos='fade-up'>
                        <div className='Contact-line row'>
                            <div className='col-12 col-sm-12 col-md-2 col-lg-2 Contact-line--icon icon'>
                                <span className='fab fa-github'></span>
                            </div>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 Contact-line--link'>
                                <a className='link' href="https://github.com/galdranorn">galdranorn</a>
                            </div>
                        </div>
                        <div className='Contact-line row'>
                            <div className='col-12 col-sm-12 col-md-2 col-lg-2 Contact-line--icon icon'>
                                <span className='fas fa-at'></span>
                            </div>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 Contact-line--link'>
                                <a className='link' href="mailto:skiberowska.justyna@wp.pl">skiberowska.justyna@wp.pl</a>
                            </div>
                        </div>
                        <div className='Contact-line row'>
                            <div className='col-12 col-sm-12 col-md-2 col-lg-2 Contact-line--icon icon'>
                                <span className='fas fa-mobile-alt'></span>
                            </div>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 Contact-line--link'>
                                <a className='link' href="callto:514673940">+48 514 673 940</a>
                            </div>
                        </div>
                        <div className='Contact-line row'>
                            <div className='col-12 col-sm-12 col-md-2 col-lg-2 Contact-line--icon icon'>
                                <span className='fab fa-linkedin-in'></span>
                            </div>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 Contact-line--link'>
                                <a className='link' href="https://www.linkedin.com/in/justyna-skiberowska/">justyna-skiberowska</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}