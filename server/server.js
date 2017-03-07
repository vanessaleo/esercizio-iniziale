var express = require('express');
var app = express();
var path = require('path');
var router= express.Router();


app.listen(3500, function() {
    console.log('server partito su http://localhost:3500');
})
