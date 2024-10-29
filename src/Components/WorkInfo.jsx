import Form from "./Form";
/* eslint-disable react/prop-types */

export default function WorkInfo({ data, onChange, addEntry, removeEntry }) {
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
      {data.map((work, index) => (
        <div key={index} className="form">
          {work.company ? (
            <h3 className="form-heading">{work.company}</h3>
          ) : (
            <h3 className="form-heading">Work {index + 1}</h3>
          )}
          <Form
            label="Position: "
            name="position"
            onChange={(field, value) =>
              onChange("experience", index, field, value)
            }
            type="text"
            value={work.position}
          />
          <Form
            label="Company: "
            name="company"
            onChange={(field, value) =>
              onChange("experience", index, field, value)
            }
            type="text"
            value={work.company}
          />

          <Form
            label="Start Year: "
            name="startYear"
            onChange={(field, value) =>
              onChange("experience", index, field, formatDate(value))
            }
            type="date"
            value={work.startYear ? formatDateToYMD(work.startYear) : ""}
          />
          <Form
            label="End Year: "
            name="endYear"
            onChange={(field, value) =>
              onChange("experience", index, field, formatDate(value))
            }
            type="date"
            value={work.endYear ? formatDateToYMD(work.endYear) : ""}
          />
          <button
            onClick={() => removeEntry("experience", index)}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={addEntry}>Add Experience</button>
    </>
  );
}
