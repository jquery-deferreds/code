function unlessDeactivated(){
    return function(){
        if (deactivated === false){
            func.apply(deferred, [].slice.call(arguments));
        }
    };
}
