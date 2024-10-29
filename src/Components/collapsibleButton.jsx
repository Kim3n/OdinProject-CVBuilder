/* eslint-disable react/prop-types */
import "./styles/Components.css";
import { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const Collapsible = ({ open, children, title, icon }) => {
  const [isOpen, setIsOpen] = useState(open);

  const HandleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="collapsible-button-content">
        <div className="collapsible-button">
          <div className="collapsible-button-title-container">
            {icon && <span className="collapsible-icon">{icon}</span>}
            <h3>{title}</h3>
          </div>

          <button type="button" className="btn" onClick={HandleDropDown}>
            {!isOpen ? <SlArrowDown /> : <SlArrowUp />}
          </button>
        </div>

        <div className="card" style={{ display: isOpen ? "block" : "none" }}>
          <div className="button-children ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
