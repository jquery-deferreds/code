function googleLookup(latitude, longitude){
    var deferred = $.Deferred(),
        url = ('http://maps.googleapis.com/maps/api/staticmap?center=' +
               latitude + ',' + longitude +
               '&zoom=10&size=400x200&sensor=false'),
        TIMEOUT = 1500,
        xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();
    xhr.responseType = 'arraybuffer';

    var requestTimer = setTimeout(function(){
        xhr.abort();
        deferred.reject();
    }, TIMEOUT);

    xhr.onload = function(){
        clearTimeout(requestTimer);
        if (xhr.status === 200){
            deferred.resolve(
                'data:image/png;base64,' +
                base64ArrayBuffer(xhr.response)
            );
        }
        else {
            deferred.reject();
        }
    };

    xhr.onerror = function(){
        clearTimeout(requestTimer);
        deferred.reject();
    };

    return deferred.promise();
}
