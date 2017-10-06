#!/usr/bin/env node

/**
 * Module dependencies.
 */
'use strict';
import http        from 'http';
import debug       from 'debug';
import lasso       from 'lasso';
import app         from './server';
import lassoConfig from '../config/lasso-config';

const debugHttp = debug('http');

//configure lasso to control how JS/CSS/etc. is delivered to the browser
lasso.configure(lassoConfig);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');

/**
 * Create HTTP server.
 */
let server = http.createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debugHttp('Listening on ' + bind);
}
