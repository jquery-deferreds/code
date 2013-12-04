var fetchMap = createMapCache(),
    latitude = 52.203558,
    longitude = 0.119436;

fetchMap(latitude, longitude).done(function(map){
    // Use the map.
});
