import "./App.css";
import React, { useState } from "react";

function FormInReact() {
  const [inputs, setInputs] = useState({
    firstName: "sonu",
    lastName: "maddheshiya",
    age: 22,
    collegeName: "gniot",
    locationName: "delhi",
    courseName: "Btech",
    BranchName: "cse",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setSubmittedData(inputs); // Save form data to show later
  };

  return (
    <div>
      <h1>Form In React</h1>
      <div className="FormDetails">
        {/* Form */}
        <form className="InputDetails" onSubmit={handleSubmit}>
          <h2>Input Details</h2>

          <label>
            First name:
            <input
              name="firstName"
              value={inputs.firstName}
              onChange={handleChange}
              type="text"
            />
          </label>
          <br />

          <label>
            Last name:
            <input
              name="lastName"
              value={inputs.lastName}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Age:
            <input
              name="age"
              value={inputs.age}
              onChange={handleChange}
              type="number"
            />
          </label>
          <br />

          <label>
            College name:
            <input
              name="collegeName"
              value={inputs.collegeName}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Location name:
            <input
              name="locationName"
              value={inputs.locationName}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Course name:
            <input
              name="courseName"
              value={inputs.courseName}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Branch name:
            <input
              name="BranchName"
              value={inputs.BranchName}
              onChange={handleChange}
            />
          </label>
          <br />

          <button type="submit">Submit Form</button>
        </form>

        {/* Show Submitted Data */}
        <div className="FormDetailsShow">
          <h2>Submitted Details</h2>
          <hr />
          {submittedData && (
            <div>
              <h3>First Name: {submittedData.firstName}</h3>
              <h3>Last Name: {submittedData.lastName}</h3>
              <h3>Your Age: {submittedData.age}</h3>
              <h3>College Name: {submittedData.collegeName}</h3>
              <h3>College Location: {submittedData.locationName}</h3>
              <h3>Course Name: {submittedData.courseName}</h3>
              <h3>Branch Name: {submittedData.BranchName}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormInReact;
