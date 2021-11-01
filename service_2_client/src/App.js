import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [firstString, setFirstString] = useState('loading...');
  const [secondString, setSecondString] = useState('loading...');

  useEffect(() => {
    const firstRequest = axios.get('http://192.168.39.159/api/service1');
    const secondRequest = axios.get('http://192.168.39.159/api/service3/check');

    Promise.all([firstRequest, secondRequest])
      .then((response) => {
        // put into next two strings a response from each request replacing numbers
        setFirstString(response[0].message);
        setSecondString(response[1].message);
      })
      .catch((err) => {
          console.log(err);
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
