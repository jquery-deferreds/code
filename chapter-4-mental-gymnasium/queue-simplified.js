var waiting = [], queue = [];

function get(){
    var deferred = $.Deferred();
    if (queue.length){
        deferred.resolve(queue.shift());
    }
    else {
        waiting.push(deferred);
    }
    return deferred.promise();
}

function put(item){
    if (waiting.length){
        waiting.shift().resolve(item);
    }
    else {
        queue.push(item);
    }
}
