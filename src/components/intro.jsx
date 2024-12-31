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
            <p>
            faucibus consequat urna quis, rutrum bibendum lacus. Cras orci felis, condimentum et quam in, tristique convallis mauris. Aliquam vitae odio nunc. Fusce ac tristique nisl. Ut aliquet lectus quis accumsan tincidunt. Duis nec risus enim. Pellentesque dui elit, maximus sit amet ligula eget, tincidunt tincidunt eros. Curabitur nec vulputate lectus. Curabitur euismod at felis at porta. Quisque in laoreet leo. Vivamus euismod quam sed augue vestibulum, quis pulvinar mi convallis. Quisque a purus laoreet, luctus sem sit amet, varius risus. Phasellus sit amet sem mollis, sagittis mi blandit, fermentum tellus.             </p>
        </SectionWrapper>
    );
};

export default Intro;