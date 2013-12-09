var promises = [
    $.ajax('http://google.com'),
    $.ajax('http://yahoo.com'),
    $.ajax('http://www.nytimes.com')
];

// NOTE: DON'T DO THIS!
$.when(promises).then(function(results){
    console.log('All URLs fetched.');
});
