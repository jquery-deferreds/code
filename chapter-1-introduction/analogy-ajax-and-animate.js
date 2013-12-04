$.when(
    $.ajax('http://google.com').then(function(){
        return $('#label_1').animate({ opacity: 0.25 }, 100);
    }),
    $.ajax('http://yahoo.com').then(function(){
        return $('#label_2').animate({ opacity: 0.75 }, 200);
    })
).then(
    function(){
        // Both URLs have been fetched and both animations have completed.
    }
);
