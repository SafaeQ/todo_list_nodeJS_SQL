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

function updateProId(params, id) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE `projet` SET `title`=[value-2],`description`=[value-3],`dueDate`=[value-4],`completed`=[value-5] WHERE id = ?"
        con.query(query, id, (err, result) => {
            if (err) throw err
            resolve(result)
        })
    })
}

module.exports = {
    findAll,
    findById,
    deleteProId,
    updateProId
}