
/**
 * 
 * @param {*} app 
 */
module.exports = app => {
    
    app.get('/', (req, res) => {
        //res.sendFile(`${__dirname}\\index.html`);
        res.render('index.html'); // or res.sendFile('');
    });

    app.get('/stats', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            humidity: 33.22,
            date: new Date().toLocaleString()
        }));
    });

};