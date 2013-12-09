when2WithTimeout(200, [promise1, promise2])
.done(function(results){
    // Both promises are resolved. Results are in results[0] and results[1].
})
.fail(function(result){
    var index = result[0],
        error = result[1];
    if (index === -1){
        // Timeout!
    }
    else {
        // The promise given by index was rejected with the given error.
    }
});
