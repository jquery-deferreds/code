function fastestPromiseWithIndex(promises){
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

    for (var i = 0; i < promises.length; i++){
        promises[i].done(makeDone(i)).fail(makeFail(i));
    }

    return deferred.promise();
}
