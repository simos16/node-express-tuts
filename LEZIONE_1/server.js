//metodo require() => richiamo il modulo built-in

const http = require('http');

const server = http.createServer((req, res) => {
    //res.end('home')
//impostiamo i nostri percorsi
    if(req.url === '/') // indica la pagina di ingresso raggiungibile con localhost:8000
    //output richiesto
        res.end('Hello world')

    else if(req.url === '/servizi')
        res.end('pagina 2')

    else if(req.url === '/chi-sono')
        res.end('pagina 3')
   
    else{
        //404 => codice di errore per una risorsa non trovata
        res.writeHead(404)
        res.end('pagina non trovata')
    }

});

//80 / 8000 /8080 /3000 / 3001 / 5000 / 5001 / 5010 / 3010
server.listen(8000);


//MAC => ctrl + c
//WINDOWS =>  CMD + C
