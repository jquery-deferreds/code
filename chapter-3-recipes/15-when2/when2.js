jQuery.when2 = function(promises, options){
    var i,
        coreSlice = [].slice,
        resolveValues = promises ? coreSlice.call(promises) : [],
        length = resolveValues.length,
        resolveContexts = length ? new Array(length) : window,
        remaining = length,
        promiseArgFound = false,
        resolveOnFirstSuccess = (options &&
                                 options.resolveOnFirstSuccess),
        rejectOnFirstError = !options || options.rejectOnFirstError,

        deferred = jQuery.Deferred(),

        doneFunc = function(i){
            return function(value){
                if (deferred.state() === 'pending'){
                    --remaining;
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ?
                        coreSlice.call(arguments) : value;
                    if (resolveOnFirstSuccess){
                        deferred.resolveWith(
                            this, [i, resolveValues[i]]);
                    }
                    else if (remaining === 0){
                        deferred.resolveWith(resolveContexts, resolveValues);
                    }
                }
            };
        },

        failFunc = function(i){
            if (rejectOnFirstError){
                return function(value){
                    if (deferred.state() === 'pending'){
                        value = arguments.length > 1 ?
                            coreSlice.call(arguments) : value;
                        deferred.rejectWith(this, [i, value]);
                    }
                };
            }
            else {
                return function(value){
                    if (deferred.state() === 'pending'){
                        resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ?
                            coreSlice.call(arguments) : value;
                        if (!--remaining){
                            deferred.resolveWith(
                                resolveContexts, resolveValues);
                        }
                    }
                };
            }
        },

        progressFunc = function(i){
            return function(value){
                if (deferred.state() === 'pending'){
                    value = arguments.length > 1 ?
                        coreSlice.call(arguments) : value;
                    deferred.notifyWith(this, [i, value]);
                }
            };
        };

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
            if (resolveOnFirstSuccess){
                deferred.resolveWith(window, [i, resolveValues[i]]);
            }
            resolveContexts[i] = window;
            --remaining;
        }
    }

    if (promiseArgFound === false){
        deferred.resolveWith(resolveContexts, resolveValues);
    }

    return deferred.promise();
};
