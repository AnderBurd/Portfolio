import React from "react";
import '../styling/sectionWrapper.css';

const SectionWrapper = ({ title, children }) => { //children is a special prop that automatically includes any content nested between the opening and closing tags of a component
  return (
    <div className="section-wrapper">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default SectionWrapper;