function synchronously(tasks){
    var i, task, func,
        promise = $.Deferred().resolve().promise(),
        makeRunner = function(func, args){
            return $.when(func.apply(null, args));
        };
    for (i = 0; i < tasks.length; i++){
        task = tasks[i];
        func = task.shift();
        promise = promise.then(makeRunner(func, task));
    }
    return promise;
}
