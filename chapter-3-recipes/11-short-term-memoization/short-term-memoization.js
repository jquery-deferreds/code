var promises = {};

function createUser(username){
    if (promises.hasOwnProperty(username)){
        return promises[username];
    }
    else {
        var promise = internalCreateUser(username);
        promises[username] = promise;
        promise.always(function(){
            delete promises[username];
        });
        return promise;
    }
}
