import React from 'react';
import SectionWrapper from './sectionWrapper.jsx';
import '../styling/intro.css'

const Intro = () =>{
    return(
        <SectionWrapper>
            <h3 className = "name">Anderson Lee</h3>
            <p className = "symbolLines">
                <span className="lnr lnr-graduation-hat"></span> Simon Fraser University
            </p>
            <p className = "symbolLines">
                <span className="lnr lnr-map-marker"></span> Vancouver, British Columbia, Canada
            </p>
            <p className = "summary">
            I’m Anderson, a passionate computer science undergraduate who loves building things and solving complex problems.        
            </p>
        </SectionWrapper>
    );
};

export default Intro;