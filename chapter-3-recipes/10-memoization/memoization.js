function memoize(func){
    var promises = {};

    return function(arg){
        if (promises.hasOwnProperty(arg) === false){
            promises[arg] = $.when(func(arg)).promise();
        }
        return promises[arg];
    };
}
