function wait(timeout){
    return $.Deferred(function(deferred){
        setTimeout(deferred.resolve, timeout);
    }).promise();
}
