var weather = (function () {

    var init = function () {
        $(function () {
            $.when(getLocation())
                .then(getWeather)
                .then(displayWeather);
        })
    };

    function getLocation() {
        var deferred = $.Deferred();

        function successfullyGotLocation(position) {
            deferred.resolve(position);
        }

        navigator.geolocation.getCurrentPosition(successfullyGotLocation);

        return deferred.promise();
    }

    function getWeather(position) {
        var deferred = $.Deferred();
        var apiURL =
                "http://api.openweathermap.org/data/2.5/weather" +
                "?lat=" + position.coords.latitude +
                "&lon=" + position.coords.longitude +
                "&APPID=" + "b7fc643f9caae838d15cc6cda9593a6d" +
                "&units=" + "imperial";
        $.getJSON(apiURL, successfullyGotWeather);

        function successfullyGotWeather(weatherData) {
            deferred.resolve(weatherData);
        }

        return deferred;
    }

    function displayWeather(weatherData) {
        var weatherDescription = weatherData.weather[0].description;
        weatherDescription += ", temperature: " + Math.round(weatherData.main.temp) + " degrees";
        weatherDescription += ", wind: from " + weatherData.wind.deg + " degrees at " + Math.round(weatherData.wind.speed) + " knotts";
        weatherDescription += ", humidity: " + weatherData.main.humidity + "%";
        weatherDescription += ", pressure: " + weatherData.main.pressure + "";
        $("#weather").text(weatherDescription);
    }

    return {
        init: init
    };

}());

weather.init();