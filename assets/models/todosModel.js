const {
    con
} = require('../../dbconnection')

function getTodos() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM todo";
        con.query(query, (err, results) => {
            if (err) throw err;
            resolve(result)
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

function updateTodoById(id, data) {
    return new Promise((resolve, reject) => {
        let todo = {
            ...data
        }
    })
}

module.exports = {
    getTodos,
    getTodoById,
    deleteTodoById,
    updateTodoById,

}