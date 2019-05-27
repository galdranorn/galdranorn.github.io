import React from 'react';
import Line from './Line';
import $ from 'jquery';
import './Portfolio.scss';

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [true, false, false],
            rows: ['projects1'],
            filtered: [],
        };   
    }

    // changing state when "more projects" button clicked
    nextProjects() {
        if (this.state.projects[1]===false) {
            this.setState({...this.state, projects: [true, true, false], rows: ['projects1', 'projects2']})
        }
        else if (this.state.projects[2]===false) {
            this.setState({...this.state, projects: [true, true, true], rows: ['projects1', 'projects2', 'projects3']})
        }
    }

    // create different "more projects" button depends on state 
    createButton() {
        if (this.state.projects[2]===false) {return <button onClick={this.nextProjects()} className="Portfolio-button">More</button>}
        else {return <button className="Portfolio-button">See all on GH</button>}
    }

    render() {
        // filter projects to display them according to state
        let displayedRows=this.state.rows;
        let filtered = this.props.projects.filter(function isInArray(project) {
            return ($.inArray(project.row, displayedRows));
        });


        return (
            <div id='Portfolio' className='Portfolio'>
                <h1 className='Portfolio-header'>Portfolio</h1>
                <div className='container'>
                {
                    filtered.map((project, i) => {
                        return (
                            <Line
                                key={i}
                                name={project.name}
                                background={project.background}
                                description={project.description}
                                name2={project.name}
                                background2={project.background}
                                description2={project.description}
                            />
                        )
                    }) 
                }
                </div>
                { this.createButton() }
            </div>
        )
    }
}