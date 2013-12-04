function createWebWorker(sourceFile){

    var queue = [], // IDs of requests yet to be sent.
        requests = {}, // Key is request ID, value is request spec.
        requestId = 0, // Incremented on each message sent.
        worker = new Worker(sourceFile),
        workerState = 'idle',

        processQueue = function(){
            var id, request;
            if (workerState === 'idle' && queue.length > 0){
                workerState = 'busy';
                id = queue.shift();
                request = requests[id];
                worker.postMessage({
                    method: request.method,
                    payload: request.payload,
                    requestId: id
                });
            }
        },
        
        enqueueRequest = function(method, payload){
            var deferred = $.Deferred(),
                id = requestId++;
            requests[id] = {
                deferred: deferred,
                method: method,
                payload: payload,
            };
            queue.push(id);
            processQueue();
            return deferred.promise();
        },

        handleResponse = function(response){
            var deferred, id;
            if (response.hasOwnProperty('requestId')){
                workerState = 'idle';
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
                processQueue();
            }
            else {
                // An unsolicited message from the worker.
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
        run: enqueueRequest
    };
}
