const CollaboratorController = require('./api/collaborator-controller');
const DepartmentController = require("./api/department-controller");

module.exports = (app) => {
    app.post('/collaborator', CollaboratorController.create);
    app.get('/collaborator', CollaboratorController.fetch);
    app.get('/collaborator/:id', CollaboratorController.getOne);
    app.put('/collaborator/:id', CollaboratorController.update);
    app.delete('/collaborator/:id', CollaboratorController.delete);
    
    app.post('/department', DepartmentController.create);
    app.get('/department', DepartmentController.fetch);
    app.get('/department/:id', DepartmentController.getOne);
    app.put('/department/:id', DepartmentController.update);
    app.delete('/department/:id', DepartmentController.delete);
}