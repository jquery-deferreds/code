function eventStream(promises){
    var i, deferred = $.Deferred(),
        callNotify = function(index, type){
            return function(){
                deferred.notify(index, type, arguments);
            };
        };

    for (i = 0; i < promises.length; i++){
        promises[i]
            .done(callNotify(i, 'resolve'))
            .fail(callNotify(i, 'reject'))
            .progress(callNotify(i, 'notify'));
    }

    return deferred.promise();
}
