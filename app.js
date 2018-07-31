

const express = require('express');
const app = express();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

app.get('/', function(req, res) {
    res.send('Hello World');
}).listen(PORT);

console.log("Waiting for requests. Go to LocalHost:5000");

//stripe webhook listener
app.post('/stripe/listener', function(request, response) {
    // Retrieve the request's body and parse it as JSON:
    const event_json = JSON.parse(request.body);

    // Do something with event_json

    response.send(200);
});