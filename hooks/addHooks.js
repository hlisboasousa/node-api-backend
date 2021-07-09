const departmentHook = require('./departmentHook');
const collaboratorHook = require('./collaboratorHook');


module.exports = (app) => {
    app.addHook('preHandler', collaboratorHook);
    app.addHook('preHandler', departmentHook);
}
