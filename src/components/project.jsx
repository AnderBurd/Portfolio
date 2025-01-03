import React from 'react';
import '../styling/project.css'

const Project = ({name, children}) => {
    return(
        <div className = "project">
            <h2 className="project-name">{name}</h2>
            <div className="project-desc">{children}</div>            
        </div>
    );
};

export default Project