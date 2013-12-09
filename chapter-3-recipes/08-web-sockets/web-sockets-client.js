var $ = require('jquery-deferred'),
    socket = require('socket.io-client').connect('http://localhost:9999'),
    requests = {},
    requestId = 0;

function makeRequest(method, payload){
    var deferred = requests[requestId] = $.Deferred();
    socket.emit('request', {
        method: method,
        payload: payload,
        requestId: requestId++
    });
    return deferred.promise();
}

function handleResponse(response){
    var deferred = requests[response.requestId];
    if (response.error){
        deferred.reject(response.error);
    }
    else {
        deferred.resolve(response.payload);
    }
    delete requests[response.requestId];
}

function main(){
    var finishedCount = 0,
        possiblyExit = function(){
            if (++finishedCount === 4){
                process.exit();
            }
        };

    makeRequest('add', [20, 15]).then(
        function(result){ console.log('20 + 15 = ', result); },
        function(error){ console.log('Oops!', error); }
    ).always(possiblyExit);

    makeRequest('subtract', [20, 15]).then(
        function(result){ console.log('20 - 15 = ', result); },
        function(error){ console.log('Oops!', error); }
    ).always(possiblyExit);

    makeRequest('multiply', [20, 15]).then(
        function(result){ console.log('20 * 15 = ', result); },
        function(error){ console.log('Oops!', error); }
    ).always(possiblyExit);

    makeRequest('divide', [20, 0]).then(
        function(result){ console.log('20 / 0 = ', result); },
        function(error){ console.log('Oops!', error); }
    ).always(possiblyExit);
}

socket.on('connect', function(){
    socket.on('response', handleResponse);
    main();
});
