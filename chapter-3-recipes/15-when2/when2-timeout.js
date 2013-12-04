$.when2(
    [wait(200), promise],
    { resolveOnFirstSuccess: true })
.done(function(index, result){
    if (index === 0){
        // Timeout!
    }
    else {
        // The promise was resolved with the given result.
    }
});
