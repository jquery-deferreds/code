function emptyPromise(){
    return $.Deferred(function(deferred){
        waitingForEmpty.push(deferred);
    }).promise();
}
