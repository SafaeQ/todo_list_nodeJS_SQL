const Todo = require('../models/todosModel')


async function getTodos(req, res) {
    try {
        const todo = await Todo.getALLTodos()
    } catch (error) {

    }
}