promise.always(function(value){
    // The deferred fired with value, either via its resolve or reject method.
    console.log('The promise fired with value', value);
});
