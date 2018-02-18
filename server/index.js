var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/echo', function (req, res) {
  res.send('Hello')
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

