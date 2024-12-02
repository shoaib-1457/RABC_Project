import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [scale, setScale] = useState(0.8);

  React.useEffect(() => {
    setTimeout(() => setScale(1), 300); // Animation on load
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in successfully!'); // Replace with actual logic
  };

  return (
    <div className="login-container">
      <div className="login-card" style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
