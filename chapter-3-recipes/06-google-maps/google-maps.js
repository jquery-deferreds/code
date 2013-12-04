function createMapCache(){

    var lastKey, lastDataURI;

    return function(latitude, longitude){
        var deferred = $.Deferred();

        var getMap = function(latitude, longitude){
            var key = 'map-' + latitude + '-' + longitude;

            if (key === lastKey){
                deferred.resolve(lastDataURI);
            }
            else {
                localStorageGet(key).then(
                    function(obj){
                        if (obj.hasOwnProperty(key)){
                            lastDataURI = obj[key];
                            lastKey = key;
                            deferred.resolve(lastDataURI);
                        }
                        else {
                            // key not in local storage, use Google.
                            googleLookup(latitude, longitude).then(
                                function(dataURI){
                                    var store = {};
                                    store[key] = dataURI;
                                    localStorageSet(store);
                                    lastDataURI = dataURI;
                                    lastKey = key;
                                    deferred.resolve(dataURI);
                                },
                                function(error){
                                    deferred.reject(error);
                                }
                            );
                        }
                    },
                    function(error){
                        deferred.reject(error);
                    }
                );
            }
        };

        if (arguments.length === 2){
            getMap(latitude, longitude);
        }
        else {
            navigator.geolocation.getCurrentPosition(
                function(position){
                    getMap(position.coords.latitude, position.coords.longitude);
                },
                function(error){
                    deferred.reject(error);
                }
            );
        }
        
        return deferred.promise();
    };
}
