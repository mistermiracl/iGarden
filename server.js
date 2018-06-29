const server = require('express')();
const mosca = require('mosca');
const serialPort = require('serialport').SerialPort;

const moscaServer = new mosca.Server({});
moscaServer.attachHttpServer(server);


moscaServer.on('ready', () => {
    const client = require('mqtt').connect('mqtt://localhost:8000');
    const TOPIC = "H";
    client.on('connect', () => {
        setInterval(() => {
            var msg = (Math.random() * 100).toString();
            client.publish(TOPIC, msg);
            console.log(msg);
        }, 1000);
    });

});

server.get('/', (req, res) => {
    res.sendFile(`${__dirname}\\index.html`);
});

server.get('/stats', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        humidity: 33.22,
        date: new Date().toLocaleString()  
    }));
});

server.listen(8000, () => {
    console.log("Express on port 8000");
});