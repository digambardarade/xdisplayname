import React, { useState } from 'react';

function XDisplayName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'left', maxWidth: '320px' }}>
      <h2 style={{ marginBottom: '20px' }}>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
          <label htmlFor="firstName" style={{ minWidth: '90px', marginRight: '8px' }}>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ flex: 1 }}
          />
        </div>
        <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
          <label htmlFor="lastName" style={{ minWidth: '90px', marginRight: '8px' }}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ flex: 1 }}
          />
        </div>
        <button type="submit" style={{ marginBottom: '16px' }}>Submit</button>
        {submitted && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <span style={{ fontWeight: 'bold', marginRight: '8px' }}>Full Name :</span>
            <span>{firstName} {lastName}</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default XDisplayName;
