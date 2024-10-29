import Collapsible from "./collapsibleButton";

import "./styles/Components.css";
import { data } from "./data";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import WorkInfo from "./WorkInfo.jsx";
import CVDisplay from "./CVDisplay";
import { FaUserGraduate, FaSuitcase, FaPrint } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const Main = () => {
  const [formData, setFormData] = useState(data);
  const contentRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: contentRef,
  });

  const onFormChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const onNestedFormChange = (section, index, field, value) => {
    setFormData((prevFormData) => {
      const updatedSection = [...prevFormData[section]];
      updatedSection[index] = {
        ...updatedSection[index],
        [field]: value,
      };

      return {
        ...prevFormData,
        [section]: updatedSection,
      };
    });
  };

  const addEntry = (section) => {
    setFormData((prevFormData) => {
      let newEntry;
      if (section === "education") {
        newEntry = { school: "", course: "", startYear: "", endYear: "" };
      } else if (section === "experience") {
        newEntry = {
          company: "",
          position: "",
          responsibilities: "",
          startYear: "",
          endYear: "",
        };
      }

      return {
        ...prevFormData,
        [section]: [...prevFormData[section], newEntry],
      };
    });
  };

  // Remove entry by index
  const removeEntry = (section, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: prevFormData[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <>
      <div className="main-container">
        <div className="add-info-container">
          <Collapsible title="Personal" icon={<IoPersonSharp />}>
            <PersonalInfo onChange={onFormChange} data={formData} />
          </Collapsible>

          <Collapsible title="Education" icon={<FaUserGraduate />}>
            <EducationInfo
              onChange={onNestedFormChange}
              data={formData.education}
              addEntry={() => addEntry("education")}
              removeEntry={removeEntry}
            />
          </Collapsible>

          <Collapsible title="Experience" icon={<FaSuitcase />}>
            <WorkInfo
              onChange={onNestedFormChange}
              data={formData.experience}
              addEntry={() => addEntry("experience")}
              removeEntry={removeEntry}
            />
          </Collapsible>

          <button onClick={handlePrint}>
            <FaPrint />
          </button>
        </div>

        {/* For testing: <h3>Form Data:</h3> <pre>{JSON.stringify(formData, null, 2)}</pre> */}

        <CVDisplay data={formData} ref={contentRef}></CVDisplay>
      </div>
    </>
  );
};

export default Main;
