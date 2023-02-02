const http = require('http')
const fs = require('fs')
const user = require('./user')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        //let html = fs.readFileSync(`${__dirname}/index.html`)
        let html = fs.readFileSync('index.html');
        res.end(html)
    }else if(req.url === '/api/user'){
        res.writeHead(200, {'Content-Type' : 'application/json'} );
        /*const user = JSON.stringify([{
            name: 'Simona',
            cognome: 'Tocci'
        },
        {
            name: 'Mario',
            cognome: 'Rossi'
        }]
        
        );
        res.end(user)*/
        res.end(JSON.stringify(user))
    }else{
        res.writeHead(404);
        res.end('Not found');
    }
}).listen(8181);

console.log('Server attivo')


