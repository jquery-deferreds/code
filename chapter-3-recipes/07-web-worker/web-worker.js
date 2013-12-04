function log(message){
    postMessage({
        message: message,
        type: 'log'
    });
}

var METHODS = {
    add: function(callback, payload){
        callback({ result: payload[0] + payload[1] });
    },

    ping: function(callback){
        log('Ping command received, replying with pong.');
        callback({ result: 'pong' });
    }
};

addEventListener('message', function(event){
    var job = event.data;
    if (METHODS.hasOwnProperty(job.method)){
        METHODS[job.method](
            function(result){
                result.requestId = job.requestId;
                postMessage(result);
            },
            job.payload);
    }
    else {
        log("Attempt to call unknown method '" + job.method + "'.");
    }
});
