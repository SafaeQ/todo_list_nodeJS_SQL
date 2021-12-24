const Todo = require('../models/todosModel')


async function getTodos(req, res) {
    try {
        const todo = await Todo.getALLTodos()
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(todo))
    } catch (error) {
        console.error(error)
        res.end('Route Not Found')
    }
}
async function getTodo(req, res, id) {
    try {
        const todo = await Todo.getTodoById(id)
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(todo))
    } catch (error) {
        console.error(error)
        res.end('Route Not Found')
    }
}

module.exports = {
    getTodos,
    getTodo,

}