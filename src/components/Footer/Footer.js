import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.scss';

export class Footer extends React.Component {
    render() {
        return (
            <footer className='Footer'>
                Made with <span className="far fa-heart"></span> in Wroclaw, 2019
            </footer>
        )
    }
}