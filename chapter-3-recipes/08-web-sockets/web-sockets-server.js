var port = 9999,
    $ = require('jquery-deferred'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

var METHODS = {
    add: function(payload){
        return $.Deferred().resolve(payload[0] + payload[1]).promise();
    },
    subtract: function(payload){
        return $.Deferred().resolve(payload[0] - payload[1]).promise();
    },
    divide: function(payload){
        if (payload[1] === 0){
            return $.Deferred().reject('Cannot divide by zero.').promise();
        }
        else {
            return $.Deferred().resolve(payload[0] / payload[1]).promise();
        }
    }
};

io.sockets.on('connection', function (socket){
    socket.on('request', function(request){
        var method = request.method,
            func = METHODS[method];
        if (func){
            func(request.payload)
                .done(function(result){
                    socket.emit('response', {
                        payload: result,
                        requestId: request.requestId
                    });
                })
                .fail(function(error){
                    socket.emit('response', {
                        error: 'Calling ' + method + ' failed: ' + error,
                        requestId: request.requestId
                    });
                }
            );
        }
        else {
            socket.emit('response', {
                error: 'Unknown method: ' + method,
                requestId: request.requestId
            });
        }
    });
});

server.listen(port, '0.0.0.0');
