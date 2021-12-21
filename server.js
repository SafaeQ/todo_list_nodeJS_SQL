const http = require('http');
const {
    getProjects,
    getProjectId,
    deleteProjectId,
    updateProjectId
} = require('./assets/controllers/projectsController.js')
const hostname = '127.0.0.1';
const PORT = 3000;
// const data = require('./assets/scripts/data')

const server = http.createServer((req, res) => {

    switch (req.method) {
        case 'GET':
            if (req.url === '/projects') {
                return getProjects(req, res);
            } else if (req.url.match(/\/projects\/(\d+)/) != null) {
                // console.log('fff');
                const id = req.url.match(/\/projects\/(\d+)/)[1]
                return getProjectId(req, res, id);
            }
            break;
        case 'POST':
            if (req.url === '/project') {
                return createProject(req, res)
            }
            break;
        case 'DELETE':
            if (req.url.match(/\/projects\/(\d+)/) != null) {
                const id = req.url.match(/\/projects\/(\d+)/)[1]
                res.end('item deleted successfully')
                return deleteProjectId(req, res, id);
            }
            break;
        case 'PUT':
            if (req.url.match(/\/projects\/(\d+)/) != null) {
                const id = req.url.match(/\/projects\/(\d+)/)[1]
                return updateProjectId(req, res, id);
            }
            break;
        default:
            res.statusCode = 404;
            res.end('Route Not Found');
    }
})


server.listen(PORT, () => {
    console.log(`server listening on http://${hostname}:${PORT}/`);
});