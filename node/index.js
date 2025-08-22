console.log("Hello from Node");
const fs = require('fs');
const http = require('http');

const port  = 3000;

const server = http.createServer((req, res) => {
    
    res.end('Hello World\n');
});

server.listen(port, () => {
    console.log(`Server running`);
});
