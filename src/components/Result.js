// src/components/Result.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Result = () => {
  const { operation, num1, num2 } = useParams();
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  const calculateResult = () => {
    switch (operation) {
      case 'addition':
        return number1 + number2;
      case 'subtraction':
        return number1 - number2;
      case 'multiplication':
        return number1 * number2;
      default:
        return 'Invalid operation';
    }
  };

  const symbolMap = {
    addition: '+',
    subtraction: '-',
    multiplication: '×',
  };

  return (
    <div style={styles.resultContainer}>
      <h2>Result</h2>
      <p style={styles.result}>
        {number1} {symbolMap[operation]} {number2} = <strong>{calculateResult()}</strong>
      </p>
      <Link to={`/${operation}`} style={styles.link}>
        Calculate Again
      </Link>
    </div>
  );
};

const styles = {
  resultContainer: {
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '100px',
    textAlign: 'center',
  },
  result: {
    fontSize: '24px',
    margin: '20px 0',
  },
  link: {
    textDecoration: 'none',
    color: '#21a0f6',
    fontSize: '16px',
  },
};

export default Result;
