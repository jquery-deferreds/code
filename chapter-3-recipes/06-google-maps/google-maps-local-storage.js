function localStorageGet(keys){
    var deferred = $.Deferred();
    chrome.storage.local.get(keys, function(result){
        if (chrome.runtime.lasterror){
            deferred.reject(chrome.runtime.lasterror.message);
        }
        else {
            deferred.resolve(result);
        }
    });
    return deferred.promise();
}

function localStorageSet(items){
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
