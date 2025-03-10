// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [trainerName, setTrainerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register with', { email, password, trainerName });

    // We'll call Supabase for signup in the future.
    navigate('/dashboard');
  };

  return (
    <div style={styles.container}>
      <h1>Trainer Registration</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>Trainer Name</label>
        <input
          type="text"
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
          placeholder="Your business or trainer name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Choose a password"
          required
        />

        <button type="submit" style={styles.button}>Register</button>
      </form>

      <p>
        Already have an account? <Link to="/">Log in here</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    padding: '10px',
    cursor: 'pointer',
  },
};

export default Register;
