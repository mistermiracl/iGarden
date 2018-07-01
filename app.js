const server = require('./app/server');

//THE HTTP API SERVER NEEDS TO START LISTENING AS WELL
server.listen(8000, () => {
    console.log("Express on port 8000");
});