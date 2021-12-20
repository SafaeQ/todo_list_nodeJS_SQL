const Project = require('./projectsModel')

async function getProjects(req, res) {
    try {
        const project = await Project.findAll()
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(project));
    } catch (err) {
        res.end(err.message)
    }
}