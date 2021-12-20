const Projects = require('./assets/models/projectsModel.js')

async function getProjects(req, res) {
    try {
        const projects = await Projects.findAll()
        res.writeHeader(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(projects));
    } catch (err) {
        console.log(err)
    }
}
module.exports = getProjects