function createWebWorker(sourceFile){

    var requests = {}, // Key is request id, value is a deferred.
        requestId = 0, // Incremented on each message sent.
        worker = new Worker(sourceFile),

        sendJob = function(method, payload){
            var deferred = $.Deferred(),
                id = requestId++;
            requests[id] = deferred;
            worker.postMessage({
                method: method,
                payload: payload,
                requestId: id
            });
            return deferred.promise();
        },

        handleResponse = function(response){
            var deferred, id;
            if (response.hasOwnProperty('requestId')){
                id = response.requestId;
                if (requests.hasOwnProperty(id)){
                    deferred = requests[id];
                    delete requests[id];
                    if (response.hasOwnProperty('result')){
                        deferred.resolve(response.result);
                    }
                    else {
                        deferred.reject(response.error);
                    }
                }
            }
            else {
                // An unsolicited message from the worker. <4>
                if (response.type === 'log'){
                    console.log('Worker says:', response.message);
                }
                else {
                    console.log('Unknown message from worker:', response);
                }
            }
        };

    worker.addEventListener('message', function(event){
        handleResponse(event.data);
    });

    return {
        add: function(a, b){
            return sendJob('add', [a, b]);
        },

        ping: function(){
            return sendJob('ping');
        }
    };
}
