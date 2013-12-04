function retryingCaller( /* context, function, args... */ ){
    var context = arguments[0],
        func = arguments[1],
        args = arguments.slice(2),
        deferred = $.Deferred(),
        rejectValue,
        delays = [0.0, 0.01, 0.02, 0.05, 0.1, 0.15, 0.2, 1.0, 2.0],
        attempt = 0,

        wait = function(timeout){
            var d = $.Deferred();
            setTimeout(d.resolve, timeout);
            return d.promise();
        },

        error = function(value){
            if (rejectValue === undefined){
                rejectValue = value;
            }
            if (attempt === delays.length){
                deferred.reject(rejectValue);
            }
            else {
                call();
            }
        },

        call = function(){
            wait(delays[attempt++]).done(
                function(){
                    $.when(func.apply(context, args)).then(
                        deferred.resolve,
                        error
                    );
                }
            );
        };

    call();
    return deferred.promise();
}
