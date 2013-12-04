$.when($.ajax('http://google.com'), $.ajax('http://yahoo.com')).then(
    function(googlePage, yahooPage){
        // Both URLs have been fetched.
    }
);
