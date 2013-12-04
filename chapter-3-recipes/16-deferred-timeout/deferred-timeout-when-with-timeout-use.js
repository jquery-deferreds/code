when2WithTimeout(200, [promise1, promise2])
.done(function(result1, result2){
    // Both promises are resolved.
})
.fail(function(index, error){
    if (index === -1){
        // Timeout!
    }
    else {
        // The promise given by index was rejected with the given error.
    }
});
