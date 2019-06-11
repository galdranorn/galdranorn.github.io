import React from 'react';
import { FormattedMessage } from "react-intl";
import './SectionTitle.scss';

export class SectionTitle extends React.Component {
    
    render() {
        return (
            <div className="SectionTitle" data-aos='fade-down'>
                <h1 className={this.props.color}>
                    <FormattedMessage id={this.props.title}/>
                </h1>
            </div>
        )
    }
}


