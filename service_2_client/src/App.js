import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [firstString, setFirstString] = useState('loading...');
  const [secondString, setSecondString] = useState('loading...');

  useEffect(() => {
    const firstRequest = axios.get('http://localhost:3001');
    const secondRequest = axios.get('http://localhost:3002');

    Promise.all([firstRequest, secondRequest])
      .then((response) => {
        // put into next two strings a response from each request replacing numbers
        setFirstString('123');
        setSecondString('321');
      })
      .catch((err) => {
        setFirstString('error');
        setSecondString('error');
      });
  }, []);

  return (
    <div className='App'>
      <span>first string: {firstString}</span>
      <span>second string: {secondString}</span>
    </div>
  );
}

export default App;
