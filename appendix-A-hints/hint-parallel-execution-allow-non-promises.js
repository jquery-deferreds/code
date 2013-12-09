function fastestPromiseWithIndex(promiseInfo){
    var item, deferred = $.Deferred(),
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

    for (var i = 0; i < promiseInfo.length; i++){
        item = promiseInfo[i];
        if (item.promise && jQuery.isFunction(item.promise)){
            item.promise().done(makeDone(i)).fail(makeFail(i));
        }
        else {
            deferred.resolve(i, item);
            break;
        }
    }

    return deferred.promise();
}
