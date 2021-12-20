const projects = require('./assets/scripts/projects');

function find() {
    return new Promise((resolve, reject) => {
        resolve(projects)
    })
}

module.exports = {
    find
}