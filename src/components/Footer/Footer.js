import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.scss';

export class Footer extends React.Component {
    render() {
        return (
            <div className='Footer'>
                Made with <span class="far fa-heart"></span> in Wroclaw, 2019
            </div>
        )
    }
}