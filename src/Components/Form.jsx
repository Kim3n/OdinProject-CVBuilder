import { useState } from "react";
/* eslint-disable react/prop-types */

export default function Form({ type, name, label, value, onChange }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    onChange(name, inputValue);
    const validationMessage = validateFormField(inputValue);
    setErrorMessage(validationMessage);
  };

  const validateFormField = (value) => {
    if (type === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value) ? "" : "Invalid email address";
    } else if (type === "tel") {
      const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
      return phonePattern.test(value) ? "" : "Invalid phone number";
    }
    // No error for other types
    return "";
  };

  return (
    <div className="form-field">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />

      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
