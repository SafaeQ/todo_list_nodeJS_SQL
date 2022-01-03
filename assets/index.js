// import * as controllers from './controllers'

const addProjectModal = document.getElementById('add-project-modal')


document.getElementById('add-project').addEventListener('click', () => {
    // console.log('clikkked')
    addProjectModal.classList.add('show-modal')
})

document.getElementById('project-save').addEventListener('click', () => {
    console.log('clickeeed');
    const title = document.getElementById('input-project-title').value
    const description = document.getElementById('input-project-description').value
    const dueDate = document.getElementById('input-project-dueDate').value
    controllers.createProject(req, res)
    addProjectModal.classList.remove('show-modal')
})