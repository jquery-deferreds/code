promise.then(
    function(result){
        // The deferred was resolved with result. Double it and pass it on.
        return 2 * result;
    },
    function(error){
        // The deferred was rejected with error. Log it and pass on a different
        // (null) error.
        console.log('Error received:', error);
        return null;
    },
    function(value){
        // The deferred made progress. Convert it to a percentage string.
        return Math.round(value * 100.0) + '%';
    }
);
