function deactivatingWait(timeout, triggerCount){
    var deferred = $.Deferred(),
        count = 0,
        timeoutId = setTimeout(deferred.reject, timeout),
        trigger = function(){
            if (++count === triggerCount){
                clearTimeout(timeoutId);
                deferred.resolve();
            }
        };

    return [deferred.promise(), trigger];
}
