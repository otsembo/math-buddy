// src/components/OperationForm.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OperationForm = () => {
  const navigate = useNavigate();
  const { operation, num1: paramNum1, num2: paramNum2 } = useParams();
  const [num1, setNum1] = useState(paramNum1 || '');
  const [num2, setNum2] = useState(paramNum2 || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (num1 !== '' && num2 !== '') {
      navigate(`/${operation}/${num1}/${num2}`);
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2>{operation ? operation.charAt(0).toUpperCase() + operation.slice(1) : 'Select an Operation'}</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={styles.input}
        required
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>
        Calculate
      </button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '100px',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#21a0f6',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default OperationForm;
