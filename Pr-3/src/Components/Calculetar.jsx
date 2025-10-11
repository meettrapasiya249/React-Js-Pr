import React, { useState } from 'react';
import './Calculetar.css';

const Calculetar = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try { 
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input type="text" value={input} readOnly />

      <div className="buttons">
        <button onClick={handleClear} className="btn action">C</button>
        <button onClick={handleDelete} className="btn action">⌫</button>
        <button onClick={() => handleClick('%')} className="btn operator">%</button>
        <button onClick={() => handleClick('/')} className="btn operator">/</button>

        <button onClick={() => handleClick('7')} className="btn">7</button>
        <button onClick={() => handleClick('8')} className="btn">8</button>
        <button onClick={() => handleClick('9')} className="btn">9</button>
        <button onClick={() => handleClick('*')} className="btn operator">*</button>

        <button onClick={() => handleClick('4')} className="btn">4</button>
        <button onClick={() => handleClick('5')} className="btn">5</button>
        <button onClick={() => handleClick('6')} className="btn">6</button>
        <button onClick={() => handleClick('-')} className="btn operator">-</button>

        <button onClick={() => handleClick('1')} className="btn">1</button>
        <button onClick={() => handleClick('2')} className="btn">2</button>
        <button onClick={() => handleClick('3')} className="btn">3</button>
        <button onClick={() => handleClick('+')} className="btn operator">+</button>

        <button onClick={() => handleClick('0')} className="btn zero">0</button>
        <button onClick={() => handleClick('.')} className="btn">.</button>
        <button onClick={handleCalculate} className="btn equal">=</button>
      </div>
    </div>
  );
};

export default Calculetar;
