function succeed(value){
    return $.Deferred(function(d){
        d.resolve(value);
    }).promise();
}
