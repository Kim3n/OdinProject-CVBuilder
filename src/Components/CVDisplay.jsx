/* eslint-disable react/prop-types */
import "./styles/CV.css";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { forwardRef } from "react";
const CVDisplay = forwardRef(({ data }, ref) => {
  return (
    <div className="CV" ref={ref}>
      <div className="CV-header">
        <h1>{data.name}</h1>
        <div className="CV-contact">
          {data.phone && (
            <div className="contact">
              <MdOutlinePhoneAndroid />
              <p>{data.phone}</p>
            </div>
          )}
          {data.email && (
            <div className="contact">
              <MdEmail />
              <p>{data.email}</p>
            </div>
          )}
          {data.github && (
            <div className="contact">
              <FaGithub />
              <p>{data.github}</p>
            </div>
          )}
        </div>
      </div>

      {data.education && data.education.length > 0 && (
        <div className="CV-Education-field">
          <h1 className="CV-experience-header">Education</h1>
          {data.education.map((edu, index) => (
            <div key={index} className="experience-item">
              <h4>{edu.course}</h4>
              <p>{edu.school}</p>
              <p>Start Date: {edu.startYear}</p>
              {edu.endYear && <p>End Date: {edu.endYear}</p>}
            </div>
          ))}
        </div>
      )}

      {data.experience && data.experience.length > 0 && (
        <div className="CV-experience-field">
          <h1 className="CV-experience-header">Experience</h1>
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4>{exp.position}</h4>
              <p>{exp.company}</p>
              <p>Start Date: {exp.startYear}</p>
              {exp.endYear && <p>End Date: {exp.endYear}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default CVDisplay;
