
import React, { useState } from 'react';
import './XDisplayName.css';


function XDisplayName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [displayName, setDisplayName] = useState('');

  const getDisplayName = (first, last) => `${first} ${last}`.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayName(getDisplayName(firstName, lastName));
    setSubmitted(true);
  };

  return (
    <div className="xdisplayname-container">
      <h2 className="xdisplayname-title">Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <div className="xdisplayname-form-row">
          <label htmlFor="firstName" className="xdisplayname-label">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="xdisplayname-input"
          />
        </div>
        <div className="xdisplayname-form-row">
          <label htmlFor="lastName" className="xdisplayname-label">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="xdisplayname-input"
          />
        </div>
        <button
          type="submit"
          className="xdisplayname-submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {submitted && (
          <div className="xdisplayname-fullname-row">
            <span className="xdisplayname-fullname-label">Full Name :</span>
            <span>{displayName}</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default XDisplayName;
