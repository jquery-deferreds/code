function when2WithTimeout(timeout, deferreds, options){

    var result = deactivatingWait(timeout, deferreds.length),
        timeoutPromise = result[0],
        trigger = result[1],
        i;
    
    for (i = 0; i < deferreds.length; i++){
        deferreds[i].done(trigger);
    }

    return $.when2([timeoutPromise].concat(deferreds), options).then(
        function(){
            // Drop the 'undefined' result of the deactivatingWait promise.
            return Array.prototype.slice.call(arguments, 1);
        },
        function(index, error){
            // Adjust the index to match deferreds.
            return index - 1, error;
        },
        function(index, value){
            // Adjust the index to match deferreds.
            return index - 1, value;
        }
    );
}
