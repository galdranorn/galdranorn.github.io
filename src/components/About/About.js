import React from 'react';
import { FormattedMessage } from "react-intl";
import './About.scss';

export class About extends React.Component {
    
    render() {
        return (
            <div id='About' className='About'>
                <FormattedMessage id='About' />
            </div>
        )
    }
}


