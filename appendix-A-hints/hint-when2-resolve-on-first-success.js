for (i = 0; i < length; i++){
    if (resolveValues[i] &&
        jQuery.isFunction(resolveValues[i].promise)){
        promiseArgFound = true;
        resolveValues[i].promise()
            .done(doneFunc(i))
            .fail(failFunc(i))
            .progress(progressFunc(i));
    }
    else {
        resolveContexts[i] = window;
        --remaining;
    }
}

if (!promiseArgFound){
    if (resolveOnFirstSuccess && length){
        deferred.resolveWith(window, [0, resolveValues[0]]);
    }
    else {
        deferred.resolveWith(resolveContexts, resolveValues);
    }
}

return deferred.promise();
