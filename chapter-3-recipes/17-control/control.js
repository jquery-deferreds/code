function deferredFromPromise(promise){
    var deferred = $.Deferred();

    promise
        .done(deferred.resolve)
        .fail(deferred.reject)
        .progress(deferred.notify);

    return deferred;
}
