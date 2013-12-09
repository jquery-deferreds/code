/* THE FOLLOWING DOESN'T WORK! */

$.when2([waitThenReject(200), promise1, promise2])
.done(function(timeoutResult, result1, result2){
    // Both promises are resolved.
})
.fail(function(index, error){
    if (index === 0){
        // Timeout!
    }
    else {
        // The promise given by index was rejected with the given error.
    }
});
