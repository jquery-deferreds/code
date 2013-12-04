app.get('/shutdown', function(req, res){
    if (shuttingDown === false){
        shuttingDown = true;
        pool.emptyPromise().done(function(){
            pool.add(flushAvatarCache());
            pool.add(sendShutdownEmail());
            pool.add(flushLogs());
            pool.emptyPromise().done(function(){
                res.send(200);
                process.exit(0);
            });
        });
    }
    else {
        res.send(200);
    }
});
