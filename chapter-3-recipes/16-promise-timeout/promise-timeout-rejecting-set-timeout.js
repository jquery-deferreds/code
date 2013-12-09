function waitThenReject(timeout){
    var d = $.Deferred();
    setTimeout(d.reject, timeout);
    return d.promise();
}
