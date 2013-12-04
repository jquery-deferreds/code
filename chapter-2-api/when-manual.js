function callAfter(firstAction, secondAction, finalize){
    // Call finalize after the deferreds returned by firstAction and
    // secondAction have both finished. Pass finalize the result from both
    // deferreds.

    // NOTE: Don't write code like this!  Use $.when instead.

    var finishedCount = 0, result1, result2;

    firstAction().done(
        function(result){
            finishedCount++;
            result1 = result;
            if (finishedCount === 2){
                finalize(result1, result2);
            }
        }
    );

    secondAction().done(
        function(result){
            finishedCount++;
            result2 = result;
            if (finishedCount === 2){
                finalize(result1, result2);
            }
        }
    );
}
