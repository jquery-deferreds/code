function simpleEventStream(promises){
    var i, deferred = $.Deferred(),
        stream = function(){
            deferred.notify.apply(deferred, arguments);
        };

    for (i = 0; i < promises.length; i++){
        promises[i].done(stream).fail(stream).progress(stream);
    }

    return deferred.promise();
}
