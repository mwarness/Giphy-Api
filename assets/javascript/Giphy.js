


var myHeros = ["Borat", "Bruno", "Dr.Nira-Cain", "Cartman","Batman"];


$("#search-box").click(function () {
    event.preventDefault();
    var search = $("#userSearch").val();
    console.log(search);
    myHeros.push(search);
    console.log(myHeros);
    for (var i = 0; i < myHeros.length; i++) {     // parsing with array.length

        $("#buttons").append("<button class = 'newButt' data-value= " + myHeros[i] + " >" + myHeros[i] + "</button>");



    }



});
// 1. user input 2. dogs array 3. array creats buttons of looped variables 4.value of buton into line 15




$(document).on("click", ".newButt", function () {
    event.preventDefault();
    var newGif = $(this).attr('data-value');
    console.log(newGif);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + newGif + "&api_key=NQRuLkypf1RM9g18mQTuiYz2BEBrOHTS";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].rating);
        for (var i = 0; i < response.data.length; i++) {     // parsing with array.length
            // looping
            console.log(response.data[i].images.fixed_height_still.url)
            // fixed_height_still
            $("#gifImages").append("<img class = 'addedGif' src=" + response.data[i].images.fixed_height_still.url + " >");



        }

    })

});


// toggle source attribute on images/ onclick toggle src att/ from still to looping/ images are dynamically generated meaning document onclick and listen for a class
// add a flag for images as an attribute (animate) set to true if attribute animate = true src = looping / else src = fixed_













