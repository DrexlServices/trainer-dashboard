// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/" style={styles.link}>Logout</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
};

export default NavBar;
