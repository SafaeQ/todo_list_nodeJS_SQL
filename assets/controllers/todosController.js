const Todo = require('../models/todosModel')
const {
    getpro
} = require('../../helper')

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

async function createTodo(req, res) {
    try {
        const data = await getpro(req)
        const todo = await Todo.insertTodo(data)
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(todo))
    } catch (error) {
        console.error(error)
        res.end('Route Not Found')
    }
}

async function deleteTodo(req, res, id) {
    try {
        const todo = await Todo.deleteTodoById(id)
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(todo))
    } catch (error) {
        console.error(error)
        res.end('Route Not Found')
    }
}
async function updateTodoId(req, res, id) {
    try {
        const todo = await Todo.updateTodoById(id)
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
    createTodo,
    deleteTodo
}