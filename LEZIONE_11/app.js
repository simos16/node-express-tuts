const  MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://db_user:mongo_sim@mycluster.azlqk.mongodb.net/demo6?retryWrites=true";



MongoClient.connect(url)
    .then((db) =>{
        accountsDb = db;
        collection = accountsDb.db('demo6');
        console.log('database connesso');
    })
    .catch((err) => {
        console.log(err);
    });

//CREARE UN NUOVO COLLEZIONE
/*MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db("demo6");
    dbase.createCollection("clienti", function(err, res) {
        if (err) throw err;
        console.log("Collection creata");
        db.close();
    });
});*/

//INSERIMENTO DI PIU' CAMPI => QUERY INSERTMANY()
/*MongoClient.connect(url , (err, db) =>{
    if (err) throw err;
    let dbase = db.db("demo6");

    let myObj = [
        {nome: "pippo", anni: "50", lavoro: "sistemista"},
        {nome: "giulia", anni: "34", lavoro: "wordpress"},
    ]

    dbase.collection('utenti').insertMany(myObj, (err, res) =>{

        if (err) throw err;
        console.log(`Numero di record inseriti: ${res.insertedCount}`)
        db.close();
    })
})*/


//SELEZIONO UN SOLO DATO
/*MongoClient.connect(url, (err, db) =>{
    if (err) throw err;
    let dbase = db.db("demo6");
    dbase.collection('utenti').findOne({}, (err, res) =>{
        if (err) throw err;
        console.log(res.nome)
        db.close();
    })
})*/

//SELEZIONO TUTTI I DATI
/*MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("demo6");
    dbase.collection('utenti').find({}).toArray(function (err, res) {
        if (err) throw err;
        console.log(res)
        db.close();
    })
})*/


//SELEZIONO UN DATO CON FILTRO
/*MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("demo6");
    let query = {anni:'34'}
    dbase.collection('utenti').find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res)
        db.close();
    })
})*/


/*MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("demo6");

    let query = {anni:'25'}
    dbase.collection('utenti').deleteMany(query, function(err, obj) {
        if (err) throw err;
        console.log(`${obj.result} records cancellati` )
        db.close();
    })
})*/


/*MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("demo6");

    let query = {nome:'pippo'}
    let newValue = {$set: {anni: 45, lavoro:"cybersecurity"}}
    dbase.collection('utenti').updateOne(query, newValue ,function(err, res) {
        if (err) throw err;
        console.log(`record(s) aggiornati` )
        db.close();
    })
})*/
