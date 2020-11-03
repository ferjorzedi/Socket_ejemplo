var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
});


socket.on('disconnect', function() {

    console.log('Se perdio la coneccion con el server');
});

// escucha el servicio
socket.on('send', function(ob) {


    console.log(ob.user);
    console.log(ob.msg);

});

// envia el servicio
socket.emit('send', {
    user: 'Jordan',
    msg: 'Hola Socket'

}, function(rs) {
    console.log('Respuesta server ' + JSON.stringify(rs));
});