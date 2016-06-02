var weather = (function () {

    var init = function () {
        $(function () {

            //get location info
            $.when(getLocation())
                .then(getWeather);


            //get weather based on location

            //display weather

        })
    };

    function getLocation() {
        var deferred = $.Deferred();

        function successfullyGotWeather(position) {
            deferred.resolve(position);
        }

        navigator.geolocation.getCurrentPosition(successfullyGotWeather);

        return deferred.promise();
    }

    function getWeather(position) {
        //api.openweathermap.org/data/2.5/weather?lat=45&lon=122&APPID=b7fc643f9caae838d15cc6cda9593a6d
        alert(position.coords.latitude);
    }

    return {
        init: init
    };

}());

weather.init();


//var options = {timeout: 5000};

//function success(pos) {
//    var crd = pos.coords;

//    console.log('Your current position is:');
//    console.log('Latitude : ' + crd.latitude);
//    console.log('Longitude: ' + crd.longitude);
//    console.log('More or less ' + crd.accuracy + ' meters.');
//};

//function error(err) {
//    console.warn('ERROR(' + err.code + '): ' + err.message);
//};

//navigator.geolocation.getCurrentPosition(success, error, options);
