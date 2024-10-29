import Form from "./Form";
/* eslint-disable react/prop-types */

export default function EducationInfo({
  data,
  onChange,
  addEntry,
  removeEntry,
}) {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  const formatDateToYMD = (dateStr) => {
    if (!dateStr) return "";
    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      {data.map((edu, index) => (
        <div key={index} className="form">
          {edu.school ? (
            <h3 className="form-heading border-bottom">{edu.school}</h3>
          ) : (
            <h3 className="form-heading border-bottom">
              Education {index + 1}
            </h3>
          )}
          <Form
            label="Course: "
            name="course"
            onChange={(field, value) =>
              onChange("education", index, field, value)
            }
            type="text"
            value={edu.course}
          />
          <Form
            label="School: "
            name="school"
            onChange={(field, value) =>
              onChange("education", index, field, value)
            }
            type="text"
            value={edu.school}
          />

          <Form
            label="Start Year: "
            name="startYear"
            onChange={(field, value) =>
              onChange("education", index, field, formatDate(value))
            }
            type="date"
            value={edu.startYear ? formatDateToYMD(edu.startYear) : ""}
          />
          <Form
            label="End Year: "
            name="endYear"
            onChange={(field, value) =>
              onChange("education", index, field, formatDate(value))
            }
            type="date"
            value={edu.endYear ? formatDateToYMD(edu.endYear) : ""}
          />
          <button
            onClick={() => removeEntry("education", index)}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={addEntry}>Add Education</button>
    </>
  );
}
