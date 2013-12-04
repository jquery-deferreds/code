var urls = ['http://google.com', 'http://yahoo.com', 'http://www.nytimes.com'];
var deferreds = [];

for (var i = 0; i < urls.length; i++){
    deferreds.push($.ajax(urls[i]));
}

$.when.apply($, deferreds).then(function(result1, result2, result3){
    console.log('All URLs fetched.');
});
