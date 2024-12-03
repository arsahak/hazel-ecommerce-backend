const app = require('./server');
const config = require('./config/config');

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`app is running o http://localhost:${PORT}`);
});
