const express = require('express');

const SocketIO = require('socket.io');
const HTTP = require('http');

const path = require('path');

const app = express();

let HttpServer = HTTP.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// IO = La comunicación del Backend
module.exports.IO = SocketIO(HttpServer);

require('./Sokets/Soket');

HttpServer.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});