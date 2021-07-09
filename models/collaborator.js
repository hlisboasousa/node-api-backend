const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollaboratorSchema = mongoose.Schema({
    name: { type: String },
    birthDate: { type: Date },
    wage: { type: Number },
    isActive: { type: Boolean, default: true },
    department : { type: Schema.Types.ObjectId, ref: 'department' },
});


module.exports = mongoose.model('collaborator', CollaboratorSchema);