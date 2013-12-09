var express = require('express'),
    app = express(),
    pool = createPromisePool(),
    shuttingDown = false,
    shutdownResponses = [];

app.get('/', function(req, res){
    if (shuttingDown){
        res.redirect('http://example.com');
    }
    else {
        pool.add(handleRequest(req, res));
    }
});

app.get('/shutdown', function(req, res){
    shutdownResponses.push(res);

    if (shuttingDown === false){
        shuttingDown = true;
        pool.emptyPromise().done(function(){
            pool.add(flushAvatarCache());
            pool.add(sendShutdownEmail());
            pool.add(flushLogs());
            pool.emptyPromise().done(function(){
                for (var i = 0; i < shutdownResponses.length; i++){
                    shutdownResponses[i].send(200);
                }
                process.exit(0);
            });
        });
    }
});

app.listen(9999);
