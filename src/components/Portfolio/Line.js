import React from 'react';
import './Portfolio.scss';
import { FormattedMessage } from 'react-intl';

export const Line = (props) => (
    <div className='row Portfolio-line'>
        <div className='col-6 bordered'>
            <div className='row'>
                <div className='col-8 Portfolio-line--text'>
                    <p className="Portfolio-line--text-header">{props.name}</p>
                    <p className="Portfolio-line--text-description"><FormattedMessage id={props.description}/></p>
                    <p className="Portfolio-line--text-icons">
                        <span className="Portfolio-line--text-icons-icon fas fa-eye"></span>
                        <span className="Portfolio-line--text-icons-icon fas fa-code"></span>
                    </p>
                </div>
                <div className={'col-4 Portfolio-line--element '+props.background}>
                    <div className='Portfolio-line--element-hover-left'></div>
                </div>
            </div>
        </div>
        <div className='col-6 hgt moved'>
            <div className="row">
                <div className={'col-4 Portfolio-line--element moved '+props.background2}>
                    <div className='Portfolio-line--element-hover-right'></div>
                </div>
                <div className='col-8 Portfolio-line--text moved'>
                    <p className="Portfolio-line--text-header">{props.name2}</p>
                    <p className="Portfolio-line--text-description"><FormattedMessage id={props.description2}/></p>
                    <p className="Portfolio-line--text-icons">
                        <span className="Portfolio-line--text-icons-icon fas fa-eye"></span>
                        <span className="Portfolio-line--text-icons-icon fas fa-code"></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Line;