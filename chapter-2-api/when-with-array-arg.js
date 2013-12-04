var urls = ['http://google.com', 'http://yahoo.com', 'http://www.nytimes.com'];
var promises = [];

for (var i = 0; i < urls.length; i++){
    promises.push($.ajax(urls[i]));
}

// NOTE: DON'T DO THIS!
$.when(promises).then(function(results){
    console.log('All URLs fetched.');
});
