function emptyPromise(checkImmediately){
    var deferred = $.Deferred();
    if (checkImmediately && inProgress.length === 0){
        return deferred.resolve().promise();
    }
    else {
        waitingForEmpty.push(deferred);
        return deferred.promise();
    }
}
