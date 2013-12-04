var result = deactivatingWait(200, 2),
    timeoutPromise = result[0],
    trigger = result[1];

promise1.done(trigger);
promise2.done(trigger);

$.when2([timeoutPromise, promise1, promise2])
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
