var d = $.Deferred(),
    promise = d.promise();

var newPromise = promise.then(
    null,
    null,
    function(value){
        // The deferred made progress. Convert to a percentage string.
        return Math.round(value * 100.0) + '%';
    }
);

newPromise.progress(function(value){
    console.log('Progress:', value);
});

newPromise.done(function(value){
    console.log('Finished:', value);
});

d.notify(0.141592);
d.notify(0.618033);
d.resolve(27);
