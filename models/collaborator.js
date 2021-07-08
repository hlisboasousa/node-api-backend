const mongoose = require('mongoose');

const CollaboratorSchema = mongoose.Schema({
    name: { type: String },
    birthDate: { type: Date },
    wage: { type: Number },
    isActive: { type: Boolean },
    department: { type: String }
    }
);

module.exports = mongoose.model('Collaborator', CollaboratorSchema);