function makeQueue(){
    var $ = require('jquery-deferred'),
        waiting = [],
        queue = [];

    return {
        get: function(){
            var deferred;
            if (queue.length){
                deferred = $.Deferred().resolve(queue.shift());
            }
            else {
                deferred = $.Deferred();
                waiting.push(deferred);
            }
            return deferred.promise();
        },

        put: function(item){
            if (waiting.length){
                waiting.shift().resolve(item);
            }
            else {
                queue.push(item);
            }
        }
    };
}
