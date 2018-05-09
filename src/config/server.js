const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

server
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(allowCors)

server.listen(port, function() {
  console.log(`Backend is running on port ${port}`);
});

module.exports = server;
