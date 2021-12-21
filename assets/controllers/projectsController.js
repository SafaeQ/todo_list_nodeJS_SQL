const Project = require('../models/projectsModel')

async function getProjects(req, res) {
    try {
        const project = await Project.findAll();
        res.writeHeader(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(project));
    } catch (error) {
        console.error(error);
        res.end('Route Not Found')
    }
}

async function getProjectId(req, res, id) {
    // console.log(id);
    try {
        const projectId = await Project.findById(id);
        if (!projectId) {
            res.writeHeader(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                message: 'Project Not Found'
            }));
        } else {
            res.writeHeader(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(projectId));
        }
    } catch (error) {
        console.error(error);
        res.end('Route Not Found')
    }
}
async function deleteProjectId(req, res, id) {
    try {
        const deleteIdP = await Project.deleteProId(id)
        res.writeHeader(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(deleteIdP));
    } catch (error) {
        console.log(error);
        res.end('Route Not Found')
    }
}
async function updateProjectId(req, res, id, params) {
    try {
        // const up = await Project.findById(id)
        const updateIdP = await Project.updateProId(id)
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(updateIdP))
    } catch (error) {
        console.error(error)
        res.end('Route Not Found')
    }
}

module.exports = {
    getProjects,
    getProjectId,
    deleteProjectId,
    updateProjectId
}