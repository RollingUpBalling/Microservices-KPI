const express = require('express');

const app = express();

app.get('/', () => {
  console.log('service 1 impact');
});

app.listen(8080, () => {
  console.log('service 1 run in 8080 port');
});
