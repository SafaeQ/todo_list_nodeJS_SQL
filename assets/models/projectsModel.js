const {
    con
} = require('../../dbconnection')

function findAll() {
    return new Promise((resolve, reject) => {
        // resolve(projects)
        const query = "SELECT * FROM projet";
        con.query(query, function (err, result) {
            if (err) throw err;
            resolve(result)
        })
    })
}

function findById(id) {
    // console.log(id);
    return new Promise((resolve, reject) => {
        const queryId = "SELECT * FROM `projet` WHERE id = ?"
        con.query(queryId, id, (err, result) => {
            if (err) throw err;
            resolve(result)
        })
    })
}

function deleteProId(id) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM `projet` WHERE id = ?"
        con.query(query, id, (err, result) => {
            if (err) throw err;
            resolve(result)
        })
    })

}

function updateProId(data, id) {
    // update action
    return new Promise((resolve, reject) => {
        let proj = {
            ...data
        }
        const query = `UPDATE projet SET title= '${data.title}',description= '${data.description}',dueDate= '${data.dueDate}',completed= '${data.completed}' WHERE id = ${id}`;
        con.query(query, (err, result) => {
            if (err) throw err
            resolve(proj)
        })
    })
}

function insertProject(data) {
    return new Promise((resolve, reject) => {
        let p = {
            ...data
        }
        const query = `INSERT INTO projet (title,description,dueDate,completed) VALUE ('${data.title}','${data.description}','${data.dueDate}','${data.completed}')`;
        con.query(query, (err, result) => {
            if (err) throw err
            resolve(p)
        })
    })
}

module.exports = {
    findAll,
    findById,
    deleteProId,
    updateProId,
    insertProject
}