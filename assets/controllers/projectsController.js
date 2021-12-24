const Project = require('../models/projectsModel')
const {
    getpro
} = require('../../helper')

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
async function updateProjectId(req, res, id) {
    try {
        // colect data from request params
        // pass it to the model
        const data = await getpro(req)
        const updateIdP = await Project.updateProId(data, id)
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        return res.end(JSON.stringify(updateIdP))

    } catch (error) {
        console.error(error)
        res.end('Route Not Found')
    }
}

async function createProject(req, res) {
    try {
        const data = await getpro(req)
        const inserting = await Project.insertProject(data)
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        return res.end(JSON.stringify(inserting))
    } catch (error) {
        console.error(error)
        res.end('Route Not Found')
    }
}

module.exports = {
    getProjects,
    getProjectId,
    deleteProjectId,
    updateProjectId,
    createProject
}