const fastify = require('fastify');
const db = require("./database/config");
const routes = require('./routes')
const mongoose = require('mongoose')

const app = fastify();
try {
  mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (e) {
  console.error(e);
}

routes(app);

app.listen(5001, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
