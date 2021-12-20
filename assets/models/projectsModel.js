const projects = require('./data.js')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(projects)
    })
}

function findById(id) {

}

module.exports = {
    findAll
}