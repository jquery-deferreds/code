function get(keys){
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

function getBytesInUse(keys){
    var deferred = $.Deferred();

    chrome.storage.local.getBytesInUse(keys, function(bytesInUse){
        if (chrome.runtime.lasterror){
            deferred.reject(chrome.runtime.lasterror.message);
        }
        else {
            deferred.resolve(bytesInUse);
        }
    });

    return deferred.promise();
}

function remove(keys){
    var deferred = $.Deferred();

    chrome.storage.local.remove(keys, function(){
        if (chrome.runtime.lasterror){
            deferred.reject(chrome.runtime.lasterror.message);
        }
        else {
            deferred.resolve();
        }
    });

    return deferred.promise();
}

function clear(){
    var deferred = $.Deferred();

    chrome.storage.local.clear(function(){
        if (chrome.runtime.lasterror){
            deferred.reject(chrome.runtime.lasterror.message);
        }
        else {
            deferred.resolve();
        }
    });

    return deferred.promise();
}
