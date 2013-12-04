function deferredFromPromise(promise){
    return $.Deferred(function(deferred){
        promise
            .done(deferred.resolve)
            .fail(deferred.reject)
            .progress(deferred.notify);
    });
}
