import React from 'react';
import ProjectLeft from '../Project/ProjectLeft';
import ProjectRight from '../Project/ProjectRight';
import '../Portfolio.scss';

export const Line = (props) => (
    <div className='row Portfolio-line'>
        <ProjectLeft 
            name={props.nameL} 
            description={props.descriptionL} 
            background={props.backgroundL}
            repo={props.repoL}
            demo={props.demoL}
        />
        <ProjectRight 
            name={props.nameR} 
            description={props.descriptionR} 
            background={props.backgroundR}
            repo={props.repoR} 
            demo={props.demoR}
        />
    </div>
);

export default Line;