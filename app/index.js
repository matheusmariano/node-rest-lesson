require('./bootstrap/');

const app = require('./providers/routing');
const config = require('./config');

const port = config.app.port;

app.listen(port, () => {
  console.log(`Listening at port ${port}.`);
});
