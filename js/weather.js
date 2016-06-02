var random = (function() {

    var init = function () {
        $(function () {

            var latitude;
            var longitude;

            //get location info
            $.when(navigator.geolocation.getCurrentPosition())
                .then(function(position) {
                    alert(position.latitude);
                });
            //navigator.geolocation.getCurrentPosition(function (position) {
            //    do_something(position.coords.latitude, position.coords.longitude);
            //});

            //get weather based on location

            //display weather

        })
    };

    return {
        init: init
    };

}());

random.init();
