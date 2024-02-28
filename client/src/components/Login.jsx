import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform basic authentication
    if ((username === 'user' && password === 'password') || (username === "kee" && password === 'kee@04')) {
      // Set authentication state to true
      setIsAuthenticated(true);
      // Show success toast
      toast.success('Login successful!', { position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined, });
    } else {
      toast.error('Invalid user credentials. No user found', { position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined, });
    }
  };

  return (
    <div>
    <h1 className='title'>LIBRARY</h1>
    <div className='login-wrapper'>
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
      
      <ToastContainer />
    </div>
    </div>
    </div>
  );
};

export default Login;
