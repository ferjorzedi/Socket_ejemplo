const { io } = require('../server')

// io = es la comunicacion con el backend
io.on('connection', (client) => {

    console.log('Usuario conectado');



    client.on('disconnect', () => {
        console.log('Usuario desconectado');

    });


    // emitiendo mensaje
    client.emit('send', {
        user: 'admin',
        msg: 'bienvenido'
    });

    // escuchando cliente
    client.on('send', (data, callback) => {

        console.log(data);

        client.broadcast.emit('send', data);
        /*
                // console.log(mensaje.user);
                console.log(mensaje.msg);

                if (mensaje.user) {
                    callback({
                        rs: 'Todo Salio Bien'
                    });

                } else {
                    callback({
                        rs: 'Todo Salio MALLLLLLLLLLLLLLLLLLLLLLLLLLLLLL!!!!!!!!!!!'
                    });


                }
        */

    });

});