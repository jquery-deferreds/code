function delegateEventStream(promises, eventHandler){
    var i, deferred = $.Deferred(),
        callHandler = function(index, type){
            return function(){
                eventHandler(index, type, arguments, deferred);
            };
        };

    for (i = 0; i < promises.length; i++){
        promises[i]
            .done(callHandler(i, 'resolve'))
            .fail(callHandler(i, 'reject'))
            .handler(callHandler(i, 'notify'));
    }

    return deferred.promise();
}
