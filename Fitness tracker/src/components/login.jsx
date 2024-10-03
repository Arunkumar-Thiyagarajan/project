import React, { useState } from 'react';
import './Login.css';




const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, you can pass data to the parent via onLogin prop
    console.log({ email, password });
    onLogin(email, password);
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
       
        <h1>Welcome to Fitness tracker </h1>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
     
          <button type='submit'>PasswordReset</button>
      <div className="dont-have-account">
      
              <link to="/Registration" className="forgot-password"></link>
                Don't have an account?
                <button type='submit'>Registration</button>

              
</div>
    </form>
   
);
};

export default LoginForm;