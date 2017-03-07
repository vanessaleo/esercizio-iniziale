var express = require('express');
var router = express.Router();
var listautenti = require('./database.json')
var jsonfile = require('jsonfile');

router.get('/', function(req, res) {
    res.status(200).json(listautenti);
});
router.get('/id/:id', function(req, res) {
    var id = req.params.id;
    var utente = listautenti.find(function(el) {
        return el.id == id;
    })
    if (utente) {
        res.status(200).json(utente);
    } else {
        res.status(404).send('utente non trovato');
    }

    // var utente={};
    //   loop1:
    // for(var i=0; i<listautenti.length; i++){
    //   if (id == listautenti[i].id){
    //       utente=listautenti[i];
    //       break loop1;
    //   }
    // }
});
router.get('/sesso', function(req, res) {
    var sesso = req.query.sesso;
    var listafiltrata = listautenti.filter(function(el) {
        return el.sesso == sesso;
    })
    if (listafiltrata.length) {
        res.status(200).json(listafiltrata);

    } else {
        res.status(404).send('nessun utente di sesso:' + sesso);

    }
})

router.get('/nome', function(req, res) {
    var nome = req.query.nome;
    var listafiltrata1 = listautenti.filter(function(el) {
        return el.nome == nome;
    })
    if (listafiltrata1.length) {
        res.status(200).json(listafiltrata1);

    } else {
        res.status(404).send('nessun utente di nome:' + nome);
    }
})
//cancellazione per id
router.delete('/id/:id', function(req, res) {
    var id = req.params.id;
    var utente = listautenti.find(function(el) {
        return el.id == id;
    })
    res.status(200).json(utente);
    res.send('cancello:' + utente);
})
module.exports = router;
