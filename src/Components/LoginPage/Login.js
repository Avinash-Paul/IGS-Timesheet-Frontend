import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './Igs-logo.png';
import { useAuth } from '../../Services/authService';
import axios from 'axios'; // Import Axios

const LoginPage = () => {
  const [employee_id, setemployee_id] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        "employee_id": employee_id,
        "password": password,
      });
  
      const jwtToken = response.data.access_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
      login();
      navigate('/Dashboard');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  

  const isemployee_idValid = /^[0-9]{6}$/.test(employee_id);
  const showError = employee_id.length > 0 && !isemployee_idValid;
  console.log(employee_id, 'employee_id')
  return (
    <div className={`body login-register-bg`}>
      <div className="card log">
        <img src={logo} alt="Logo" className="logo" />
        <div>
          <input
            type="string"
            placeholder="Employee Id"
            value={employee_id}
            onChange={(e) => setemployee_id(e.target.value)}
            required
            pattern="[0-9]{6}"
            title="Please enter a valid 6-digit Employee ID"
          />
         
          {showError && (
            <p className="error">Please enter a valid 6-digit Employee ID</p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="loginbutton" onClick={handleLogin}>
          Login
        </button>
        <p style={{ color: 'black' }}>
          Don't have an account? <Link to="/RegisterPage">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

