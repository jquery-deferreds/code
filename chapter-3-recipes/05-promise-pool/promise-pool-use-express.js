var express = require('express'),
    app = express(),
    pool = createPromisePool(),
    shuttingDown = false;

app.get('/', function(req, res){
    if (shuttingDown){
        res.redirect('http://example.com');
    }
    else {
        pool.add(handleRequest(req, res));
    }
});

app.get('/shutdown', function(req, res){
    if (shuttingDown === false){
        shuttingDown = true;
        pool.add(flushAvatarCache());
        pool.add(sendShutdownEmail());
        pool.add(flushLogs());
        pool.emptyPromise().done(
            function(){
                res.send(200);
                process.exit(0);
            }
        );
    }
    else {
        res.send(200);
    }
});

app.listen(9999);
