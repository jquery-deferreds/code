function eventHandler(index, type, args, deferred){
    if (type === 'resolve'){
        if (args[0].status === 404){
            // Ignore any not-found errors.
        }
        else {
            deferred.resolve.apply(deferred, args);
        }
    }
    else if (type === 'reject'){
        deferred.reject.apply(deferred, args);
    }
}
