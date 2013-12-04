function fastestPromise( /* promises... */ ){
    var deferred = $.Deferred(),
        done = function(result){
            deferred.resolve(result);
        },
        fail = function(error){
            deferred.reject(error);
        };

    for (var i = 0; i < arguments.length; i++){
        arguments[i].done(done).fail(fail);
    }

    return deferred.promise();
}
