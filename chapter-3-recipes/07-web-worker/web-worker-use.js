var worker = createWebWorker('examples/src/web-worker.js');

$.when(worker.add(3, 4), worker.ping())
.done(
    function(total, pingReply){
        console.log('Total = ' + total + '. Ping reply = ' + pingReply + '.');
    }
);
