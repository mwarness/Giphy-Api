

// array used to create initial buttons
var myHeros = ["batman", "superman", "spiderman"];

for (var i = 0; i < myHeros.length; i++) {

    // literally dynamically generating the buttons to the page
    $("#buttons").append("<button class = 'newButt' data-value= " + myHeros[i] + " >" + myHeros[i] + "</button>");



}
// taking my input from the search and turning it into a button while clearing out any other previous buttons
$("#search-box").click(function () {
    event.preventDefault();
    var search = $("#userSearch").val();
    console.log(search);
    myHeros.push(search);
    console.log(myHeros);
    $("#buttons").empty();
    for (var i = 0; i < myHeros.length; i++) {

        // creating button based on value of whats in array
        $("#buttons").append("<button class = 'newButt' data-value= " + myHeros[i] + " >" + myHeros[i] + "</button>");



    }



});



// ajax api call begins

$(document).on("click", ".newButt", function () {
    event.preventDefault();
    var newGif = $(this).attr('data-value');
    console.log(newGif);
    var queryURL = "https://cors-anywhere.herokuapp.com/" + "http://api.giphy.com/v1/gifs/search?q=" + newGif + "&api_key=NQRuLkypf1RM9g18mQTuiYz2BEBrOHTS";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#gifImages").empty();

        for (var i = 0; i < response.data.length; i++) {
            
            console.log(response.data[i].images.fixed_height_still.url)

            var newDiv = $("<div>");
            newDiv.addClass("addedGif");

            var newRating = $("<h2>").html("Rating: " + response.data[i].rating);
            newDiv.append(newRating);

            var newImg = $("<img>");
            newImg.attr("src", response.data[i].images.fixed_height_still.url);
            newImg.attr("data-still", response.data[i].images.fixed_height_still.url);
            newImg.attr("data-animate", response.data[i].images.fixed_height.url);
            newImg.attr("data-flag", "still");
            newDiv.append(newImg);

            // Append the new Gifs to the gifPanel
            $("#gifImages").append(newDiv);

        }

    })


});
// ajax api call ends

$(document).on("click", ".addedGif", function () {
    event.preventDefault();
    var flag = $(this).find("img").attr("data-flag");

    // Make the Gif either animated or still depending on the "data-state" value
    if (flag === "still") {
        $(this).find("img").attr("src", $(this).find("img").attr("data-animate"));
        $(this).find("img").attr("data-flag", "animate");
    }
    else {
        $(this).find("img").attr("src", $(this).find("img").attr("data-still"));
        $(this).find("img").attr("data-flag", "still");
    }
    if ("data-flag" === "still") {
        newImg.attr("src", response.data[i].images.fixed_height.url);

    }


});
// toggle source attribute on images/ onclick toggle src att/ from still to looping/ images are dynamically generated meaning document onclick and listen for a class
// add a flag for images as an attribute (animate) set to true if attribute animate = true src = looping / else src = fixed_













