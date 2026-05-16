import React, { useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore((state) => state);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(username);
    navigate('/');
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;