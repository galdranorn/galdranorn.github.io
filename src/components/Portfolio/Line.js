import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Line = (props) => (
    <div className='row Portfolio-projects--line'>
        <div className='col-6 bordered'>
            <div className='row'>
                <div className='col-8 Portfolio-projects--line-text'>
                    <p className="Portfolio-projects--line-text-header">{props.name}</p>
                    <p><FormattedMessage id={props.description}/></p>
                </div>
                <div className={'col-4 Portfolio-projects--line-element '+props.background}>
                    <div className='hover-left'></div>
                </div>
            </div>
        </div>
        <div className='col-6 hgt moved'>
            <div className="row">
                <div className={'col-4 Portfolio-projects--line-element moved '+props.background2}>
                    <div className='hover-right'></div>
                </div>
                <div className='col-8 Portfolio-projects--line-text moved'>
                    <p className="Portfolio-projects--line-text-header">{props.name2}</p>
                    <p><FormattedMessage id={props.description2}/></p>
                </div>
            </div>
        </div>
    </div>
);

export default Line;