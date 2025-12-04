import React from 'react';
import SectionWrapper from './sectionWrapper.jsx';
import '../styling/contactMe.css'



const Contact = () =>{
    return(
        <SectionWrapper title = "Links">
            <div className = "Links">
                <p>AndersonLee0248@gmail.com</p>
                <a href="https://github.com/AnderBurd" target="_blank">GitHub <span className="lnr lnr-location"></span> </a>
                <a href="https://www.linkedin.com/in/anderson-lee-796ab2330/" target="_blank">Linkedin <span className="lnr lnr-location"></span> </a>
            </div>

        </SectionWrapper>
    );
};


export default Contact