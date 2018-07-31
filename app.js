//I think that this line could be axed?
const {createServer} = require ('http');
//I think that this line could be axed


var express = require('express');
var app = express();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

app.get('/', function(req, res) {
    res.send('Hello World');
}).listen(PORT);

//const server = createServer(app);

//server.listen(PORT, err => {
//    if(err) throw err;

//    console.log('Server started!');
//})