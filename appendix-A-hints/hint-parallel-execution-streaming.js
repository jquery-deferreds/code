function eventHandler(index, type, args, deferred){
    if (type === 'resolve'){
        if (args[0].status === 404){
            if (index === 0){
                // Redis look-up failed.
                deferred.promise().done(function(avatar){
                    // Add avatar to Redis cache.
                });
            }
            else if (index === 1){
                // Filesystem look-up failed.
                deferred.promise().done(function(avatar){
                    // Add avatar to filesystem cache.
                });
            }
        }
        else {
            deferred.resolve.apply(deferred, args);
        }
    }
    else if (type === 'reject'){
        deferred.reject.apply(deferred, args);
    }
}
