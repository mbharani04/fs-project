import React, { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get old data
    const oldData = JSON.parse(localStorage.getItem("users")) || [];

    // Add new data
    const newData = [...oldData, formData];

    // Save in localStorage
    localStorage.setItem("users", JSON.stringify(newData));

    alert("Registered Successfully");

    // Clear form
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;