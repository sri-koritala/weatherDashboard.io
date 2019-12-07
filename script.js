$(document).ready(function () {

    $("#srchBtn").click(function () {

        var location = $("#txtInput").val();
        var APIKey = "c43813fe319c0a2bd9aa15f73282d979";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=" + APIKey;

        var presentDay = moment().tz("Australia/Adelaide").format('LLLL');
        var x = $("#Date");
        x.innerHTML = presentDay;

        var timeZone = moment().add("39600", "seconds");


        if (location != "") {

            $.ajax({
                url: queryURL,
                method: "GET"

            })

                .then(function (response) {

                    console.log(queryURL);

                    console.log(response);
                    var iconId = response.weather[0].icon;
                    var iconUrl = "http://openweathermap.org/img/wn/";
                    var iconFormat = ".png";


                    $("#City").html("<h2>" + response.name + "</h2>");
                    $("#Date").text(presentDay);
                    $("#Date").text(timeZone);
                    $("#Temperature").text("Temperature (C): " + response.main.temp);
                    $("#Img").attr("src", iconUrl + iconId + iconFormat);
                    $("#Humidity").text("Humidity : " + response.main.humidity);
                    $("#WindSpeed").text("Wind speed: " + response.wind.speed);
                    $("#UVIndex").text("UV index: " + response.coord.lon);



                });

        }
        else {
            $("#error").html("Field cannot be empty");
        }
        var counterId = 0;


        var button = $("<button>");
        button.text(location);
        button.val(location);
        button.attr("style", "display: block; margin-left: -40px;");

        button.attr("id", counterId);
        counterId++;


        $("#searchHistory").prepend(button);



    });


    $("#searchHistory").on("click", function (event) {

        event.preventDefault();
        var location = event.target.value;

        var APIKey = "c43813fe319c0a2bd9aa15f73282d979";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"

        })

            .then(function (response) {

                console.log(queryURL);

                console.log(response);

                var iconId = response.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/";
                var iconFormat = ".png";

                $("#City").html("<h2>" + response.name + "</h>");
                $("#Date").text(presentDay);
                $("#Temperature").text("Temperature (C): " + response.main.temp);
                $("#Img").attr("src", iconUrl + iconId + iconFormat);
                $("#Humidity").text("Humidity : " + response.main.humidity);
                $("#WindSpeed").text("Wind speed: " + response.wind.speed);
                $("#UVIndex").text("UV index: " + response.coord.lon);



            });


    });

    $("#srchBtn").on("click", function () {

        var location = $("#txtInput").val();

        var APIKey = "c43813fe319c0a2bd9aa15f73282d979";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=metric&appid=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"

        })

            .then(function (response) {

                console.log(queryURL);

                console.log(response);
                var iconId1 = response.list[0].weather[0].icon;
                var iconUrl1 = "http://openweathermap.org/img/wn/";
                var iconFormat1 = ".png";

                $("#weatherForecast").html("<h2> Weather Forecast</h2>");
                $("#date").text(response.list[6].dt_txt);
                $("#img").attr("src", iconUrl1 + iconId1 + iconFormat1);
                $("#temperature").text("Temp: " + response.list[6].main.temp);
                $("#humidity").text("Humidity: " + response.list[6].main.humidity);

                $("#date1").text(response.list[13].dt_txt);
                $("#img1").attr("src", iconUrl1 + iconId1 + iconFormat1);
                $("#temperature1").text("Temp: " + response.list[13].main.temp);
                $("#humidity1").text("Humidity: " + response.list[13].main.humidity);

                $("#date2").text(response.list[21].dt_txt);
                $("#img2").attr("src", iconUrl1 + iconId1 + iconFormat1);
                $("#temperature2").text("Temp: " + response.list[21].main.temp);
                $("#humidity2").text("Humidity: " + response.list[21].main.humidity);

                $("#date3").text(response.list[27].dt_txt);
                $("#img3").attr("src", iconUrl1 + iconId1 + iconFormat1);
                $("#temperature3").text("Temp: " + response.list[27].main.temp);
                $("#humidity3").text("Humidity: " + response.list[27].main.humidity);

                $("#date4").text(response.list[36].dt_txt);
                $("#img4").attr("src", iconUrl1 + iconId1 + iconFormat1);
                $("#temperature4").text("Temp: " + response.list[36].main.temp);
                $("#humidity4").text("Humidity: " + response.list[36].main.humidity);

            });

        
    });



});

