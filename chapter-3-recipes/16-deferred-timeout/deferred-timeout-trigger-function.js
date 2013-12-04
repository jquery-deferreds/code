function deactivatingWait(timeout, triggerCount){
    var deferred = $.Deferred(),
        count = 0,
        timeoutId = setTimeout(deferred.reject, timeout),
        trigger = function(){
            if (++count === triggerCount){
                deferred.resolve();
                clearTimeout(timeoutId);
            }
        };

    return [deferred.promise(), trigger];
}
