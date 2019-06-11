import React from 'react';
import '../Portfolio.scss';
import { FormattedMessage } from 'react-intl';

export const ProjectLeft = (props) => (
        <div className='col-sm-12 col-md-12 col-lg-6 bordered'>
            <div className='row bordered-bot'>
                <div className='col-sm-8 col-md-8 col-lg-8 order-12 order-sm-12 order-md-1 order-lg-1 Portfolio-line--text'>
                    <p className="Portfolio-line--text-header">{props.name}</p>
                    <p className="Portfolio-line--text-description"><FormattedMessage id={props.description}/></p>
                    <p className="Portfolio-line--text-icons">
                        <a href={props.demo} target="_blank"><span className="Portfolio-line--text-icons-icon fas fa-eye"></span></a>
                        <a href={props.repo} target="_blank"><span className="Portfolio-line--text-icons-icon fas fa-code"></span></a>
                    </p>
                </div>
                <a className='col-sm-4 col-md-4 col-lg-4 order-3 Portfolio-line--element' href={props.repo} target="_blank">
                    <div className={'thumbnail '+props.background}>
                        <div className='thumbnail-hover-left'></div>
                    </div>
                </a>
            </div>
        </div>
);

export default ProjectLeft;