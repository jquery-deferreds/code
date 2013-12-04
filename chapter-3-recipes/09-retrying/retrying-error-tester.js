function tester(){
    var count = 0, max404errors = 2;
    return function(error){
        return error.status === 404 ? count++ < max404errors : true;
    };
}
