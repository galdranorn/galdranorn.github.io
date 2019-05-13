import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Technologies.scss';

export class Technologies extends React.Component {
    createIcon(id) {
        return (
            <div className={'col-2 Technologies-icons--icon '+'bg-'+id}></div>
        )
    }

    render() {
        let icons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18] // because 'for' loop not working
        return (
            <div id='Technologies' className='Technologies'>
                <h1 className='Technologies-header'>
                    <FormattedMessage id='Technologies' />
                </h1>
                <div className='container'>
                    <div className='row Technologies-icons'>
                        { icons.map((icon) => this.createIcon(icon)) }
                    </div>
                </div>
            </div>
        )
    }
}