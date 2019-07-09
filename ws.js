const socketio = require('socket.io');

function createWebsocketServer(server) {
    const io = socketio(server);
    io.on('connection', client => {
        client.on('message', message => { console.log(message) });
        client.on('customError', error => console.error(error.message, error.code));
        client.on('disconnect', () => { console.log('disconnect'); });
    });
}

module.exports = createWebsocketServer;

