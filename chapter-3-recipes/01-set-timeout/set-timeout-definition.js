function wait(timeout){
    var deferred = $.Deferred();
    setTimeout(deferred.resolve, timeout);
    return deferred.promise();
}
