//EXPRESS USES HTTP, SO EXPRESS IS NOT A SERVER PER SE, http is
var express = require('express');
var app = express();
var http = require('http');
var mosca = require('mosca');
var path = require('path');

var server = http.createServer(app);
var moscaBroker = new mosca.Server({});
//FOR SOME REASON MOSCA ONLY ACCEPTS THE HTTP API AS A VALID SERVER, CAN'T USE EXPRESS BUT FOR REQUESTS ONLY, BECAUSE EXPRESS IS NO SERVER
moscaBroker.attachHttpServer(server);

app.use(express.static(path.join(__dirname, '../public/views')));

require('./routes')(app);
require('./mqtt')(moscaBroker);

module.exports = server;