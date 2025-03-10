// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
    <div style={styles.container}>
      <h1>Trainer Dashboard</h1>
      <p>This is where you'll create and manage classes, view bookings, etc.</p>

      <p style={{ marginTop: '20px' }}>
        <Link to="/">Log Out</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
};

export default Dashboard;
