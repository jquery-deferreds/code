var promise = wait(500);

promise.done(function(){
    console.log('Timeout fired!');
});

one(promise);
two(promise);
