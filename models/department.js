const mongoose = require('mongoose');

const DepartmentSchema = mongoose.Schema({
    name: { type: String, dropDups: true }
});

module.exports = mongoose.model('department', DepartmentSchema);