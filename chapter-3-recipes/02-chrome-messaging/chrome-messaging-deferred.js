function sendMessageDeferred(tabId, message){
    var deferred = $.Deferred();

    chrome.tabs.sendMessage(tabId, message, function(result){
        if (result === undefined){
            deferred.reject(chrome.runtime.lasterror.message);
        }
        else {
            deferred.resolve(result);
        }
    });
    
    return deferred.promise();
}
