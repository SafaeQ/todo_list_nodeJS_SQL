const Todo = require('../models/todosModel')


async function getTodos(req, res) {
    try {
        const todo = await Todo.getALLTodos()
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(todo))
    } catch (error) {

    }
}