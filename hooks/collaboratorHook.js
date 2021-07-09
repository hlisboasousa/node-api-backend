const Collaborator = require('../models/collaborator');

module.exports = (request, reply, done) => {  
    
    Collaborator.countDocuments({}, (err, count) => {
        if (err) {
            console.error(err);
            reply.code(500).send('Error!');
        }
        reply.header('Content-Range', `notes 0-${count}/${count}`);
        done();
    });
};