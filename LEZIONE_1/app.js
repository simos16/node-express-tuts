const http = require('http')



const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end('Pagina home')
    else if (req.url === '/studenti')
        res.end('Elenco studenti')
    else if (req.url === '/corsi')
        res.end('Elenco corsi')
});

server.listen(3000);
