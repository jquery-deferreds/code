function eventStream(promises){
    var i, deferred = $.Deferred(),
        callProgress = function(index, type){
            return function(){
                deferred.notify(index, type, arguments);
            };
        };

    for (i = 0; i < promises.length; i++){
        promises[i]
            .done(callProgress(i, 'resolve'))
            .fail(callProgress(i, 'reject'))
            .progress(callProgress(i, 'notify'));
    }

    return deferred.promise();
}
