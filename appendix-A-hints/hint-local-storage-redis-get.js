var redis = require('redis'),
    client = redis.createClient(),
    $ = require('jquery-deferred');

function redisGet(hashkey){
    var deferred = $.Deferred();

    client.get(hashkey, function(err, result){
        if (err){
            deferred.reject(err);
        }
        else {
            deferred.resolve(result);
        }
    });

    return deferred.promise();
}
