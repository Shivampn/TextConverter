import React, { useState } from 'react';
import './style.css'
export default function APP() {

  const [text, setText] = useState('');

  const handleclick = (event) => {
    setText(event.target.value)
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  return (
    <div>
      <h1>Text Convertor</h1>
      <input
        type="text"
        value={text}
        onChange={handleclick}
        placeholder='Enter the text here' />
      <br />

      <button onClick={toUpperCase}>Upper Case</button>
      <button onClick={toLowerCase}>Lower Case</button>
    </div>

  );
}