// const static = require('node-static');
// const file = new(static.Server)(__dirname);

const http = require('http');

// const db = require('dbconnection')
const hostname = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/api/projects' && req.method === 'GET') {

    } else {
        res.writeHeader(404, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: 'Route Not Found'
        }));
    }
})

server.listen(PORT, hostname, () => {
    console.log(`server listening on http://${hostname}:${PORT}/`);
});