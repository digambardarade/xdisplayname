
import React, { useState } from 'react';
import './XDisplayName.css';


function XDisplayName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');

  // Allow any character in name (no validation)
  // const nameRegex = /^[A-Za-z ]+$/;

  const getDisplayName = (first, last) => `${first} ${last}`.trim();

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setError('');
    // If either field is empty or invalid, do not submit
    if (!firstName || !lastName) {
      setSubmitted(false);
      setDisplayName('');
      setError('Both fields are required.');
      return false;
    }
    setDisplayName(getDisplayName(firstName, lastName));
    setSubmitted(true);
    return true;
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
        {error && (
          <div style={{ color: 'red', marginTop: '8px' }}>{error}</div>
        )}
        {submitted && (
          <div className="xdisplayname-fullname-row">
            <span className="xdisplayname-fullname-label">Full Name: {displayName}</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default XDisplayName;
