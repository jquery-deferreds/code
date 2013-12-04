function clonePromise(promise){
    var handler = function(index, type, args, deferred){
        var func;
        if (type === 'resolve'){
            func = deferred.resolve;
        }
        else if (type === 'reject'){
            func = deferred.reject;
        }
        else if (type === 'notify'){
            func = deferred.notify;
        }
        func.apply(deferred, args);
    };

    return delegateEventStream([promise], handler);
}
