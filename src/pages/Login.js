// src/pages/Login.js


import { useState, useContext } from 'react';  // Import useState and useContext
import { Input, Button, message } from 'antd';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      return message.error("Please enter both email and password");
    }
    // Assuming login accepts email and password
    login(email, password);
    message.success("Logged in successfully!");
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      
      
      <Input
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
      
      <Input.Password
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
      
      <Button type="primary" onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
