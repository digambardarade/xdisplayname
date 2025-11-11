import "./App.css";
import "./XDisplayName.css";
import { useEffect, useState } from "react";

function XDisplayName() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFirst = (e) => {
    setFirst(e.target.value);
  };

  const handleLast = (e) => {
    setLast(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first || !last) {
      setFullName("");
      return;
    }
    let res = first + " " + last;
    setFullName(res);
  };
  return (
    <>
  <div className="App xdisplayname-container">
  <h1 className="xdisplayname-title">Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div className="xdisplayname-form-row">
            <label htmlFor="firstName" className="xdisplayname-label">First Name:</label>
            <input id="firstName" type="text" value={first} onChange={handleFirst} className="xdisplayname-input" />
          </div>
          <div className="xdisplayname-form-row">
            <label htmlFor="lastName" className="xdisplayname-label">Last Name:</label>
            <input id="lastName" type="text" value={last} onChange={handleLast} className="xdisplayname-input" />
          </div>
          <button type="submit" className="xdisplayname-submit">Submit</button>
        </form>
        {fullName && (
          <div className="xdisplayname-fullname-row"><span className="xdisplayname-fullname-label">Full Name: </span>{fullName}</div>
        )}
      </div>
    </>
  );
}

export default XDisplayName;