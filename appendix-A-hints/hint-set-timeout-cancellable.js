function wait(timeout){
    var deferred = $.Deferred(),
        promise = deferred.promise(),
        timeoutId = setTimeout(deferred.resolve, timeout);

    promise.cancel = function(){
        clearTimeout(timeoutId);
        deferred.reject.apply(deferred, arguments);
    };

    return promise;
}
