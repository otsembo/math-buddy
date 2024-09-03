// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OperationForm from './components/OperationForm';
import Result from './components/Result';

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Sidebar />
        <div style={styles.contentContainer}>
          <Routes>
            <Route path="/" element={<Navigate to="/addition" />} />
            <Route path="/:operation" element={<OperationForm />} />
            <Route path="/:operation/:num1/:num2" element={<Result />} />
            <Route path="*" element={<h2>404: Page Not Found</h2>} />
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
