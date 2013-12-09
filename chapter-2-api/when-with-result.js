$.when(firstAction(), secondAction()).then(finalize).done(function(){
    // arguments holds the result returned by the finalize function.
});
