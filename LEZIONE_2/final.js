const http = require('http')
const os = require('os')
const fs = require('fs')

let utente = os.userInfo();
let piattaforma  = os.platform();
let data = new Date();

let cliente = fs.readFileSync('cliente.html');
let prodotti = fs.readFileSync('prodotti.html');

let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;

const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end(messaggio)
    else if(req.url === '/prodotti')
        res.end(prodotti) 
    else if(req.url === '/cliente')
        res.end(cliente)
    else{
        res.writeHead(404)
        res.end('risorsa non trovata')
        }
    
})

server.listen(3001)
console.log(messaggio)


