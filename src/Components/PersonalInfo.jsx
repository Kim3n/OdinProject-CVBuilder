import Form from "./Form";
/* eslint-disable react/prop-types */

export default function PersonalInfo({ data, onChange }) {
  return (
    <div>
      <Form
        name="name"
        label="Name: "
        onChange={onChange}
        type="text"
        value={data.name}
      />
      <Form
        name="phone"
        label="Phone: "
        onChange={onChange}
        type="tel"
        value={data.phone}
      />
      <Form
        name="email"
        label="Email: "
        onChange={onChange}
        type="email"
        value={data.email}
      />

      <Form
        name="github"
        label="Github: "
        onChange={onChange}
        type="text"
        value={data.github}
      />
    </div>
  );
}
