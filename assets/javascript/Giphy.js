$(function () {


    var dogs = ["English bulldog", "Rottweiler", "French bulldog", "Boston terrier"];
    for (var i = 0; i < dogs.length; i++) {     // parsing with array.length

        $("body").append("<button>" + dogs[i] + "</button>");





    }

    $("#search-box").click(function () {
        event.preventDefault();
        var search = $("#userSearch").val();
        console.log(search);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=NQRuLkypf1RM9g18mQTuiYz2BEBrOHTS";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.data[0].rating);

        })

    });
// 1. user input 2. dogs array 3. array creats buttons of looped variables 4.value of buton into line 15














});
