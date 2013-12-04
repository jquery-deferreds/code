promise.fail(function(error){
    // error is the value with which the deferred was rejected.
    console.log('The promise was rejected with', error);
});
