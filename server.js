const http = require('http');

const {
    getProjects,
    getProjectId,
    deleteProjectId,
    updateProjectId,
    createProject
} = require('./assets/controllers/projectsController.js')

const {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodoId
} = require('./assets/controllers/todosController')

const hostname = '127.0.0.1';
const PORT = 3000;

////////////////////////////////////

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
            if (req.url === '/projects/todos') {
                return getTodos(req, res);
            } else if (req.url.match(/\/todos\/(\d+)/) !== null) {
                const id = req.url.match(/\/todos\/(\d+)/)[1]
                return getTodo(req, res, id)
            }
            break;
        case 'POST':
            if (req.url === '/project') {
                res.end('item created successfully')
                return createProject(req, res)
            } else if (req.url === '/todo') {
                res.end('todo created successfully')
                return createTodo(req, res)
            }

            break;
        case 'DELETE':
            if (req.url.match(/\/projects\/(\d+)/) != null) {
                const id = req.url.match(/\/projects\/(\d+)/)[1]
                res.end('item deleted successfully')
                return deleteProjectId(req, res, id);
            } else if (req.url.match(/\/todos\/(\d+)/) != null) {
                const id = req.url.match(/\/todos\/(\d+)/)[1]
                res.end('todo deleted successfully')
                return deleteTodo(req, res, id);
            }
            break;
        case 'PUT':
            if (req.url.match(/\/projects\/(\d+)/) != null) {
                const id = req.url.match(/\/projects\/(\d+)/)[1]
                res.end('project updated successfully')
                return updateProjectId(req, res, id);
            } else if (req.url.match(/\/todos\/(\d+)/) != null) {
                const id = req.url.match(/\/todos\/(\d+)/)[1]
                res.end('todo updated successfully')
                return updateTodoId(req, res, id);
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