var $ = require('jquery-deferred');

function createPromisePool(){

    var inProgress = [],
        waitingForEmpty = [];

    return {
        add: function(promise){
            inProgress.push(promise);
            promise.always(function(){
                var i;
                for (i = 0; i < inProgress.length; i++){
                    if (inProgress[i] === promise){
                        inProgress.splice(i, 1);
                        break;
                    }
                }

                if (inProgress.length === 0){
                    for (i = 0; i < waitingForEmpty.length; i++){
                        waitingForEmpty[i].resolve();
                    }
                    waitingForEmpty = [];
                }
            });
        },

        emptyPromise: function(){
            var deferred = $.Deferred();
            waitingForEmpty.push(deferred);
            return deferred.promise();
        }
    };
}
