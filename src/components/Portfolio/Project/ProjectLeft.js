import React from 'react';
import '../Portfolio.scss';
import { FormattedMessage } from 'react-intl';

export const ProjectLeft = (props) => (
        <div className='col-sm-12 col-md-12 col-lg-6 bordered'>
            <div className='row bordered-bot'>
                <div className='col-sm-8 col-md-8 col-lg-8 order-2 order-md-12 Portfolio-line--text'>
                    <p className="Portfolio-line--text-header">{props.name}</p>
                    <p className="Portfolio-line--text-description"><FormattedMessage id={props.description}/></p>
                    <p className="Portfolio-line--text-icons">
                        <a href={props.demo} target="_blank"><span className="Portfolio-line--text-icons-icon fas fa-eye"></span></a>
                        <a href={props.repo} target="_blank"><span className="Portfolio-line--text-icons-icon fas fa-code"></span></a>
                    </p>
                </div>
                <div className={'col-sm-4 col-md-4 col-lg-4 Portfolio-line--element '+props.background}>
                    <div className='Portfolio-line--element-hover-left'></div>
                </div>
            </div>
        </div>
);

export default ProjectLeft;