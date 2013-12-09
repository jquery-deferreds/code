function deactivatablePromise(promise){
    var deferred = $.Deferred(),
        newPromise = deferred.promise(),
        deactivated = false,
        unlessDeactivated = function(func){
            return function(value){
                if (deactivated === false){
                    return func(value);
                }
            };
        };

    promise
        .done(unlessDeactivated(deferred.resolve))
        .fail(unlessDeactivated(deferred.reject))
        .progress(unlessDeactivated(deferred.notify));

    newPromise.deactivate = function(){
        deactivated = true;
        return newPromise;
    };

    return newPromise;
}
