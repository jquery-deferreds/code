function fastestPromiseWithIndex( /* promises... */ ){
    var deferred = $.Deferred(),
        makeDone = function(index){
            return function(result){
                deferred.resolve(index, result);
            };
        },
        makeFail = function(index){
            return function(error){
                deferred.reject(index, error);
            };
        };

    for (var i = 0; i < arguments.length; i++){
        if (arguments[i].promise && jQuery.isFunction(arguments[i].promise)){
            arguments[i].done(makeDone(i)).fail(makeFail(i));
        }
        else {
            deferred.resolve(i, arguments[i]);
            break;
        }
    }

    return deferred.promise();
}
