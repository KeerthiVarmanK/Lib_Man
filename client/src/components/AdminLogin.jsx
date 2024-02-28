import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = ({ setIsAdminAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check admin credentials
    if (username === 'admin' && password === 'adminpassword') {
      // Set admin authentication status
      //setIsAdminAuthenticated(true);
      // Redirect to admin dashboard
      navigate('/admindashboard');
    } else {
      // Notify user of invalid credentials
      alert('Invalid username or password');
    }
  };

  return (
    <div>
        <h1 className='title'>LIBRARY</h1>
    <div className='login-wrapper'>
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </div>
  );
};

export default AdminLogin;
