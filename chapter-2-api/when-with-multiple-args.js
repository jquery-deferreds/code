var promises = [
    $.ajax('http://google.com'),
    $.ajax('http://yahoo.com'),
    $.ajax('http://www.nytimes.com')
];

$.when.apply($, promises).then(
    function(result1, result2, result3){
        console.log('All URLs fetched.');
    }
);
