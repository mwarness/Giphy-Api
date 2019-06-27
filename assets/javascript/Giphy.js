


var dogs = ["English bulldog", "Rottweiler", "French bulldog", "Boston terrier"];


$("#search-box").click(function () {
    event.preventDefault();
    var search = $("#userSearch").val();
    console.log(search);
    dogs.push(search);
    console.log(dogs);
    for (var i = 0; i < dogs.length; i++) {     // parsing with array.length

        $("#buttons").append("<button class = 'newButt' data-value= " + dogs[i] + " >" + dogs[i] + "</button>");



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
            $("#gifImages").append("<img class = 'addedGif' src=" + response.data[i].images.fixed_height_still.url +" >");
    
    
    
        }

    })

});














