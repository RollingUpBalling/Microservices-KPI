const express = require('express');

const app = express();

app.get('/api/service1', (req, res) => {
  console.log('service 1 is working');
  return res.json({message: 'hello'});
});

app.listen(8080, () => {
  console.log('service 1 run in 8080 port');
});
