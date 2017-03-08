var express = require('express');
var app = express();
var path = require('path');
var router= express.Router();
//aggiungere un nuovo utente
var bodyparser=require('body-parser');
app.use(bodyparser.json());
//
var utenti=require('./utenti/utenti.js');
app.use('/users',utenti);
//servo la index html
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.listen(3500, function() {
    console.log('server partito su http://localhost:3500');
});
