function eventStream(promises){
    var i, deferred = $.Deferred(),
        firedCount = 0,
        callProgress = function(index, type){
            return function(){
                deferred.notify({
                    index: index,
                    type: type,
                    args: [].slice.call(arguments)
                });
                
                if (type === 'resolve' || type === 'reject'){
                    if (++firedCount === promises.length){
                        // All promised have fired.
                        deferred.resolve();
                    }
                }
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
