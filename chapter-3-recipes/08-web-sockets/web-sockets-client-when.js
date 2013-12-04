function main(){
    return $.when(
        makeRequest('add', [20, 15]).then(
            function(result){ console.log('20 + 15 = ', result); },
            function(error){ console.log('Oops!', error); }
        ),
        makeRequest('subtract', [20, 15]).then(
            function(result){ console.log('20 - 15 = ', result); },
            function(error){ console.log('Oops!', error); }
        ),
        makeRequest('multiply', [20, 15]).then(
            function(result){ console.log('20 * 15 = ', result); },
            function(error){ console.log('Oops!', error); }
        ),
        makeRequest('divide', [20, 0]).then(
            function(result){ console.log('20 / 0 = ', result); },
            function(error){ console.log('Oops!', error); }
        )
    );
}

socket.on('connect', function(){
    socket.on('response', handleResponse);
    main().always(function(){
        process.exit();
    });
});
