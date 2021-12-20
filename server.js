const http = require('http');
const getProjects = require('./assets/controllers/projectsController.js')



const hostname = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/api/projects' && req.method === 'GET') {
        getProjects(req, res);
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

module.exports = getProjects;