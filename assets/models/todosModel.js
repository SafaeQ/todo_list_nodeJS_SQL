const {
    con
} = require('../../dbconnection')

function getALLTodos() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM todo";
        con.query(query, (err, results) => {
            if (err) throw err;
            resolve(results)
        })
    })
}

function getTodoById(id) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM todo WHERE id = ?"
        con.query(query, id, (err, results) => {
            if (err) throw err;
            resolve(results)
        })
    })
}

function deleteTodoById(id) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM todo WHERE id =?";
        if (err) throw err
        resolve(result)
    })
}

function createTodo(data) {
    return new Promise((resolve, reject) => {
        let todo = {
            ...data
        }
        const query = `INSERT INTO todo (id, title_todo, projet_id) VALUE ('${data.title_todo}','${data.projet_id}')`;
        con.query(query, (err, result) => {
            if (err) throw err
            resolve(result)
        })
    })
}

function updateTodoById(id, data) {
    return new Promise((resolve, reject) => {
        let todo = {
            ...data
        }
        const query = `UPDATE projet SET title_todo= '${data.title_todo}'projet_id= '${data.projet_id}' WHERE id = ${id}`;
        con.query(query, (err, result) => {
            if (err) throw err
            resolve(todo)
        })
    })
}


module.exports = {
    getALLTodos,
    getTodoById,
    deleteTodoById,
    updateTodoById,
    createTodo

}