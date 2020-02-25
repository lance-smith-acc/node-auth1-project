const express = require('express');

const router = require('./routers/router');
const configureMiddleware = require('./configure-middleware.js');
const server = express();

configureMiddleware(server);

server.use('/api', router);

module.exports = server;
