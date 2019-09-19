var express = require('express');
var router = express.Router();

function connectConsultas(callback){
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb+srv://admin:admin@lamharadb-yinqm.mongodb.net/test?retryWrites=true&w=majority";
  var client = new MongoClient(url,{useNewUrlParser:true});
//process.env.DATABASE_URL||"mongodb://admin:admin@cluster0-shard-00-00-ebu9m.mongodb.net:27017,cluster0-shard-00-01-ebu9m.mongodb.net:27017,cluster0-shard-00-02-ebu9m.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",{useNewUrlParser:true}
  client.connect(function(err) {

    if (err) throw err;

    console.log("Conectado con mongo");
    var db = client.db("Busquedas");
    var colBusq = db.collection("busquedas");

    callback(colBusq, client);
  })
}

function getBusquedas(callback){

  connectConsultas(function(colBusq, client){
    colBusq.find({})
      .toArray(function(err2,docs)
      {
        if (err2) throw err2;

        callback(docs);
        client.close();
      });
  });
}

function crearConsulta(content, callback){
  connectConsultas(function(colConsult, client){
    colConsult.insertOne(content, function(err){
      if(err) throw err;
      console.log("Inserto la consulta");
      client.close();
    });
  })
}

router.get("/busquedas", function(req, res, next) {
  getBusquedas(function(docs)
  {
     res.send(docs);
  })

});

router.post("/crearConsulta", function(req,res,next) {

  console.log("crearConsulta", req.body);
  crearConsulta(req.body);
  res.redirect("/");


})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
