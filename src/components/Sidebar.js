// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2>Operations</h2>
      <ul style={styles.menu}>
        <li>
          <NavLink to="/addition" style={styles.link} activeStyle={styles.activeLink}>
            Addition
          </NavLink>
        </li>
        <li>
          <NavLink to="/subtraction" style={styles.link} activeStyle={styles.activeLink}>
            Subtraction
          </NavLink>
        </li>
        <li>
          <NavLink to="/multiplication" style={styles.link} activeStyle={styles.activeLink}>
            Multiplication
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#282c34',
    padding: '20px',
    color: '#fff',
    height: '100vh',
  },
  menu: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    display: 'block',
    padding: '10px 0',
  },
  activeLink: {
    fontWeight: 'bold',
    color: '#21a0f6',
  },
};

export default Sidebar;
