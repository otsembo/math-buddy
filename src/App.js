// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Sidebar />
        <div style={styles.contentContainer}>
          <Routes>

            {/* TODO 1: Add a new route to open the operation form */}
            {/* TODO 2: Add a new route that opens the Result page */}
            {/* TODO BONUS 1: Add a new route to  make the homepage default to navigating to the addition operation form  */}
            {/* TODO BONUS 2: Add a custom Page Not Found error */}

          </Routes>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
  },
  contentContainer: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#eef2f5',
    minHeight: '100vh',
  },
};

export default App;
