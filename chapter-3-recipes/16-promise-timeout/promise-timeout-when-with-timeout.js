function when2WithTimeout(timeout, promises, options){

    var result = deactivatingWait(timeout, promises.length),
        timeoutPromise = result[0],
        trigger = result[1],
        i;
    
    for (i = 0; i < promises.length; i++){
        promises[i].done(trigger);
    }

    return $.when2([timeoutPromise].concat(promises), options).then(
        function(){
            // Drop the 'undefined' result of the deactivatingWait promise.
            return Array.prototype.slice.call(arguments, 1);
        },
        function(index, error){
            // Adjust the index to match promises.
            return [index - 1, error];
        },
        function(index, value){
            // Adjust the index to match promises.
            return [index - 1, value];
        }
    );
}
