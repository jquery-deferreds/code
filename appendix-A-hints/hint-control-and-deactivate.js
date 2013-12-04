function controllablePromise(promise){
    var deferred = $.Deferred(),
        deactivated = false,
        unlessDeactivated = function(func){
            return function(){
                if (deactivated === false){
                    func.apply(deferred,
                               Array.prototype.slice.call(arguments));
                }
                return deferred;
            };
        },
        resolve = unlessDeactivated(deferred.resolve),
        resolveWith = unlessDeactivated(deferred.resolveWith),

        reject = unlessDeactivated(deferred.reject),
        rejectWith = unlessDeactivated(deferred.rejectWith),

        notify = unlessDeactivated(deferred.notify),
        notifyWith = unlessDeactivated(deferred.notifyWith);

    promise
        .done(resolve)
        .fail(reject)
        .progress(notify);

    deferred.resolve = resolve;
    deferred.resolveWith = resolveWith;

    deferred.reject = reject;
    deferred.rejectWith = rejectWith;

    deferred.notify = notify;
    deferred.notifyWith = notifyWith;

    deferred.deactivate = function(){
        deactivated = true;
        return deferred;
    };

    return deferred;
}
