import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Technologies.scss';

export class Technologies extends React.Component {
    createIcon(id, i) {
        return (
            <div key={i} className={'animated infinite pulse col-6 col-sm-6 col-md-4 col-lg-2 Technologies-icons--icon '+'bg-'+id}></div>
        )
    }

    render() {
        let icons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18] // because 'for' loop not working
        return (
            <div id='Technologies' className='Technologies'>
                <h1 className='Technologies-header' data-aos='fade-down'>
                    <FormattedMessage id='Technologies' />
                </h1>
                <div className='container' data-aos='fade-up'>
                    <div className='row Technologies-icons'>
                        { icons.map((icon, i) => this.createIcon(icon, i)) }
                    </div>
                </div>
            </div>
        )
    }
}