import React from 'react';
import { FormattedMessage } from 'react-intl';
import Line from './Line/Line';
import './Portfolio.scss';

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentShow: [0, 5]
        };   
    }

    // create different "more projects" button depends on state 
    createButton() {
        if (this.state.currentShow[1]===5) {
            return <button onClick={() => this.setState({currentShow: [0,8]})} className='Portfolio-button' data-aos='zoom-in'><FormattedMessage id='Portfolio-button1'/></button>
        }
        else if (this.state.currentShow[1]===8) {
            return <button onClick={() => this.setState({currentShow: [0,12]})} className='Portfolio-button' data-aos='zoom-in'><FormattedMessage id='Portfolio-button2'/></button>
        }
        else {return <a href="https://github.com/galdranorn" target="_blank"><button className='Portfolio-button' data-aos='zoom-in'><FormattedMessage id='Portfolio-button3'/></button></a>}
    }

    renderProjects() {
        let currentShow = this.props.projects.slice(this.state.currentShow[0], this.state.currentShow[1]);
        let currentShowLeft = [];
        let currentShowRight = [];

        for (let i=0; i<currentShow.length; i++) {
            if (i%2===0) {currentShowRight.push(this.props.projects[i])}
            else {currentShowLeft.push(this.props.projects[i])}
        }
        
        let rendered = [];
        for (let i=0; i<currentShowLeft.length; i++) {
            rendered.push(
                <Line
                    nameL={currentShowLeft[i].name} 
                    descriptionL={currentShowLeft[i].description} 
                    backgroundL={currentShowLeft[i].background}
                    repoL={currentShowLeft[i].repo}
                    demoL={currentShowLeft[i].demo}
                    nameR={currentShowRight[i].name} 
                    descriptionR={currentShowRight[i].description} 
                    backgroundR={currentShowRight[i].background} 
                    repoR={currentShowRight[i].repo}
                    demoR={currentShowRight[i].demo}
                />
            )
        }
        return rendered;
    }

    render() {
        return (
            <div id='Portfolio' className='Portfolio'>
                <h1 className='Portfolio-header' data-aos='fade-down'>Portfolio</h1>
                <div className='container' data-aos='fade-up'>
                    {this.renderProjects()}
                </div>
                
                { this.createButton() }
            </div>
        )
    }
}