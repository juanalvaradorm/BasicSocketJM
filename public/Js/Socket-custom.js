var Socket = io();
// Escuchar
Socket.on('connect', function() {
    console.log('Conectado al servidor');
});

Socket.on('disconnect', function() {
    console.log('Perdimos la connección con el servidor');
});

Socket.on('enviarMensaje', function(mensage) {
    console.log('Servidor: ', mensage);
});

//Enviar información
Socket.emit('enviarMensaje', {
    usuario: 'Juan Manuel',
    mensage: 'Hola'
}, function(resp) {
    console.log(resp);
});