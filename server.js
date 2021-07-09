const fastify = require('fastify');
const db = require("./database/config");
const mongoose = require('mongoose')
const routes = require('./routes')
const addHooks = require('./hooks/addHooks');
const depHook = require('./hooks/departmentHook');

const app = fastify();
try {
  mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
} catch (e) {
  console.error(e);
}

addHooks(app);
routes(app);

app.listen(5001, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
