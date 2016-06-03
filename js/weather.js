var weather = (function () {

    var weatherDataCached;
    var isCelciusCached = false;

    var init = function () {
        $(function () {

            $("#btnToggleTemperature").click(toggleTemperature);

            $.when(getLocation())
                .then(getWeather)
                .then(displayWeather);
        })
    };

    function getLocationGeo() {
        var deferred = $.Deferred();

        function successfullyGotLocation(position) {
            deferred.resolve(position);
        }

        navigator.geolocation.getCurrentPosition(successfullyGotLocation);

        return deferred.promise();
    }

    function getLocation() {
        var deferred = $.Deferred();

        function successfullyGotLocation(position) {
            deferred.resolve(position);
        }

        $.getJSON("http://ip-api.com/json", successfullyGotLocation);

        return deferred.promise();
    }

    function getWeather(position) {
        var deferred = $.Deferred();
        var apiURL =
                "http://api.openweathermap.org/data/2.5/weather" +
                "?lat=" + position.lat +
                "&lon=" + position.lon +
                "&APPID=" + "b7fc643f9caae838d15cc6cda9593a6d" +
                "&units=" + "imperial";
        $.getJSON(apiURL, successfullyGotWeather);

        function successfullyGotWeather(weatherData) {
            weatherDataCached = weatherData;
            deferred.resolve(weatherData);
        }

        return deferred;
    }

    function displayWeather(weatherData, isCelcius) {
        isCelcius = !!isCelcius 
        var temperature = weatherData.main.temp;
        if (isCelcius) {
            temperature = (temperature - 32) * 5 / 9;
        }
        temperature = Math.round(temperature);
        var weatherDescription = weatherData.name + " - " + weatherData.weather[0].description;
        weatherDescription += ", temperature: " + temperature + ((isCelcius) ? "C" : "F");
        weatherDescription += ", wind" + ((weatherData.wind.deg) ? ' from ' + weatherData.wind.deg + ' degrees' : ' variable') + " at " + Math.round(weatherData.wind.speed) + " mph";
        weatherDescription += ", humidity: " + weatherData.main.humidity + "%";
        weatherDescription += ", pressure: " + weatherData.main.pressure + "";
        $("#weather").text(weatherDescription);

        var imageUrl = 
            "http://openweathermap.org/img/w/" + 
            weatherData.weather[0].icon + 
            ".png"

        $("#imgWeatherIcon").attr("src", imageUrl);
    }

    function toggleTemperature() {
        isCelciusCached = !isCelciusCached;
        $("#btnToggleTemperature").text((isCelciusCached ? "Farenheit" : "Celcius"));
        displayWeather(weatherDataCached, isCelciusCached);
    }

    return {
        init: init
    };


}());

weather.init();
