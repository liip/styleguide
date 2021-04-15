/* eslint-env node */
const fractal = require('./fractal.config.js');
const server = fractal.web.server();

server.start().then(() => {
  // eslint-disable-next-line no-console
  console.log(`Fractal server is now running.`);
});

server.stop();
