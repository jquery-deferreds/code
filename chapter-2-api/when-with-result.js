$.when(firstAction(), secondAction()).then(finalize).done(function(){
    // arguments holds the result of the finalize function.
});
