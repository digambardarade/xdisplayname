import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const changeInputFirstName = (e) => {
    let fname = e.target.value.trim();
    if(fname === '') {
      setFirstName('');
      setFullName('');
    }
    setFirstName(fname);
  }
  
  const changeInputLastName = (e) => {
    let lname = e.target.value.trim();
    if(lname === '') {
      setLastName('');
      setFullName('');
    }
    setLastName(lname);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
    else
    {
      setFullName('');
    }
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className=''>
          <label>
            FirstName: 
            <input 
              className='' 
              type="text" 
              onChange={changeInputFirstName} 
              value={firstName} 
              placeholder='Enter first name' 
              required={true} 
            />
          </label>
        </div>
        <div className=''>
          <label>
            LastName: 
            <input 
              className=''  
              type="text" 
              onChange={changeInputLastName} 
              value={lastName} 
              placeholder='Enter last name' 
              required={true} 
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
      {fullName ? (<div id='fullName'>Full Name: {fullName}</div>) : ''}
    </div>
  );
}

export default App;