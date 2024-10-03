// src/components/RegistrationForm.js
import React, { useState } from 'react';
import './Registration.css';


const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here, pass data to parent via onRegister prop
    console.log({ name, email, password, phone, gender });
    onRegister(name, email, password, phone, gender);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
    <label>BirthdayDate</label>
    <input type='date'
     value={BirthdayDate}
     onChange={(e) => setBirthdayDate(e.target.value)}
          required/>
   </div>
      
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
    <label>Address</label>
    <input type='textarea'
     value={Address}
     onChange={(e) => setAddress(e.target.value)}
     required/>
     
   </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
