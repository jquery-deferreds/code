function set(items){
    var deferred = $.Deferred();

    chrome.storage.local.set(items, function(){
        if (chrome.runtime.lasterror){
            deferred.reject(chrome.runtime.lasterror.message);
        }
        else {
            deferred.resolve();
        }
    });

    return deferred.promise();
}
