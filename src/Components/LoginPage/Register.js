import React, { useState } from 'react';
import './Login.css';
import logo from './Igs-logo.png';
import axios from 'axios';

const RegisterPage = () => {
  const [employee_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [employee_id, setEmployeeId] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');

  const API_BASE_URL = 'http://127.0.0.1:8000/api/';

  const saveUserDetails = (userData) => {
    console.log('saveUserDetails called with:', userData);
    return axios.post(`${API_BASE_URL}register/`, {
      "employee_name": employee_name,
      "phonenumber": phonenumber,
      "employee_id": employee_id,
      "role": role,
      "password": password
    })
      .then(response => response.data)
      .catch(error => console.error('Registration failed:', error));
  };
  console.log(saveUserDetails, 'saveUserDetails')

  const handleRegister = async () => {
    try {
      console.log(handleRegister, "handleRegister");
      const response = await saveUserDetails({
        "employee_name": employee_name,
        "phonenumber": phonenumber,
        "employee_id": employee_id,
        "role": role,
        "password": password
      });
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className={`body login-register-bg`}>
      <div className="card log">
        <img src={logo} alt="Logo" className="logo" />
        <div>
          <input
            type="text"
            placeholder="Employee name"
            value={employee_name}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone number"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Employee ID"
            value={employee_id}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="Management">Management</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Information Technology">Admin</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='loginbutton' onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
