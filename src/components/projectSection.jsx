import React from 'react';
import SectionWrapper from './sectionWrapper.jsx';
import Project from './project.jsx';

const Projects = () =>{
    return(
        <SectionWrapper title = "Projects">
            <Project name = "LoLHelp">
                <p>This app helps new players learn champions in the game League of Legends</p>
            </Project>

            <Project name = "Dictionary">
                <p>faucibus consequat urna quis, rutrum bibendum lacus. Cras orci felis, condimentum et quam in, tristique convallis mauris. Aliquam vitae odio nunc. Fusce ac tristique nisl. Ut aliquet lectus quis accumsan tincidunt. </p>
            </Project>

            <Project name = "Calculator">
                <p>faucibus consequat urna quis, rutrum bibendum lacus. Cras orci felis, condimentum et quam in, tristique convallis mauris.  </p>
            </Project>
            
            <Project name = "Website">
                <p>felis at porta. Quisque in laoreet leo. Vivamus euismod quam sed augue vestibulum, quis pulvinar mi convallis.</p>
            </Project>
        </SectionWrapper>
    );
};

export default Projects;