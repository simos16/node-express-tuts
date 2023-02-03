const http = require('http')
const url = require('url')
const querystring = require('querystring');


//analisi dei percorsi
let server = http.createServer(function(req, res){
    let page = url.parse(req.url).pathname;
    console.log(page);

//analisi di una query string
 let queryStr = url.parse(req.url).query;
 console.log(queryStr);   
    
    res.writeHead(200, {'Content-Type' : 'text/plain'});

    //usiamo il modulo querystring per gestire i parametri delle query 
    let params = querystring.parse(queryStr);
    
    if(params['nome']){
        res.write(`Il tuo nome è ${params['nome']} \n`)
    }

    if(params['cognome']){
        res.write(`Il tuo cognome è ${params['cognome']} \n`)
    }

    if(page === '/'){
        res.write('Sei nella home');
    }
     else if(page === '/utente'){
        res.write('Sei nella pagina utente');
    }
    else if(page === '/utente/page2'){
        res.write('Sei nella seconda pagina utente');
    }
    else{
        res.write('not found');
    }
    res.end();

}).listen(8081);