var express = require('express');
var app = express();
// var path = require('path');
// var router= express.Router();

app.get('/', function (req,res){
  res.send('hello world');
});
app.listen(3500, function() {
    console.log('server partito su http://localhost:3500');
});
