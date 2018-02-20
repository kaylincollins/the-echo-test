const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/echo', (req, res) => {
  res.send('Connected to the Echo server!');
});

app.post('/echo', (req, res) => {
  var msg = req.body.data;
  //Only respond if there is a message body
  if (msg === '') {
    res.end(); 
  } else {
    res.send('RECEIVED: ' + msg);
  }
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

module.exports = app;