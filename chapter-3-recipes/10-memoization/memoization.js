function memoize(fn){
    var promises = {};

    return function(arg){
        if (promises.hasOwnProperty(arg) === false){
            promises[arg] = $.when(fn(arg)).promise();
        }
        return promises[arg];
    };
}
