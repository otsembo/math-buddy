import React, { useState } from 'react';

const MainContent = ({ operation }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1Change = (e) => setNum1(Number(e.target.value));
  const handleNum2Change = (e) => setNum2(Number(e.target.value));

  const calculate = () => {
    switch (operation) {
      case 'addition':
        return num1 + num2;
      case 'subtraction':
        return num1 - num2;
      case 'multiplication':
        return num1 * num2;
      default:
        return 0;
    }
  };

  return (
    <div style={styles.mainContent}>
      <h2>{operation.charAt(0).toUpperCase() + operation.slice(1)}</h2>
      <input type="number" value={num1} onChange={handleNum1Change} placeholder="Enter first number" />
      <input type="number" value={num2} onChange={handleNum2Change} placeholder="Enter second number" />
      <h3>Result: {calculate()}</h3>
    </div>
  );
};

const styles = {
  mainContent: {
    padding: '20px',
  },
};

export default MainContent;
