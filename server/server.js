var express = require('express');
var app = express();
var path = require('path');
// var router= express.Router();

//servo la index html
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.listen(3500, function() {
    console.log('server partito su http://localhost:3500');
});
