const express = require('express');

const app = express();

var status = 'ok';

/*app.use(function(req,res,next){
  console.log(status);
  if(status !== 'ok'){
    setTimeout(next(),10000)}
  }

);*/


app.get('/api/service3/broke', (req, res) => {
  console.log('service 3 is working');
  status = 'not ok'
  return res.json({message: 'status change to not ok'});
});

app.get('/api/service3/fix', (req, res) => {
  console.log('service 3 is working');
  status = 'ok'
  return res.json({message: 'status change to ok'});
});


app.get('/api/service3/check', (req, res, next) => {
  if(status !== 'ok'){
    return setTimeout(()=> {
      console.log('service 3 is working');
      res.json({message: 'hello from service 3 with delay 10 sec'});
    }, 10000)
  }
  return res.json({message: 'hello from service 3'});
});

app.listen(8090, () => {
  console.log('service 3 run in 8090 port');
});
