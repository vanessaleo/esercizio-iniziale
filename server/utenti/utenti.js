var express = require('express');
var router = express.Router();
var listautenti = require('./database.json')
var jsonfile = require('jsonfile');
var path=require('path');
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
    var indice = listautenti.indexOf(utente);
    listautenti.splice(indice, 1);
    jsonfile.writeFile(path.join(__dirname, 'database.json'),listautenti,function(err){
      console.log(err)
    })
    res.json(listautenti);
})
//aggiungere un nuovo utente
router.post('/',function(req,res){
  var nuovo=req.body;
  //calcolo max id
  var max= 0
  for (let i=0; i<listautenti.length; i++){
    if (listautenti[i].id>=max){
      max=listautenti[i].id;
        }
        //assegno nuovo id
        nuovo.id=max+1;
        listautenti.push(nuovo);
      //salvo su file
      jsonfile.writeFile(path.join(__dirname,'database.json'),listautenti.function(err){
        console.log(err);
      })
  //mando la lista al client
  res.json(listautenti);
})

//UPDATE
router.put('/id/:id', function(req,res){
var id=req.params.id;
var aggiornato=req.body
console.log(id, aggiornato);
var vecchio=listautenti.find(functon(el){
  return el.id==id;
});
var indice=listautenti.indexOf(vecchio);
listautenti.splice(indice,1,aggiornato);
jsonfile.writeFile(path.join(__dirname,'database.json'),listautenti.function(err){
  console.log(err);
});
res.json(aggiornato);
});
module.exports = router;
