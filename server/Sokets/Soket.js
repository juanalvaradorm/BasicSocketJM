const { IO } = require('../server');

IO.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Servidor',
        mensage: 'Hola Usuario'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    //Escuchar Clíente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // usuario que envia
        client.emit('enviarMensaje', data);

        // Para Todos
        client.broadcast.emit('enviarMensaje', data);

        // if (mesagge.usuario) {
        //     callback({
        //         resp: "Todo salio bien"
        //     });
        // } else {
        //     callback({
        //         resp: "Todo salio mal"
        //     });
        // }

    });

});