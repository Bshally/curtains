$(document).ready(function(){
    //Get input elements
    var height = document.getElementById("height");
    var width = document.getElementById("width");
    var slider = document.getElementById("ratio");
    //Get diagram labels
    var topLabel = document.getElementById("top-label");
    var bottomLabel = document.getElementById("bottom-label");
    var currentLabel = document.getElementById("current-label");

    console.log(topLabel)
    //SVG OBJ's
    var vinyl = $("#vinyl");
    //Set Global variables
    var sqFt;
    var percentage;
    //Calc sqft and set slider max range and labels
    $('form').on('submit', function(event){
        event.preventDefault();
        var newMax = parseInt(height.value);
        topLabel.innerHTML = newMax + " Feet";
        slider.max = newMax;
      	sqFt = parseInt(height.value ) * parseInt(width.value);
        currentLabel.innerHTML = slider.value + "Feet";

    });
    //Detect change in range and convey to current label
    $('#ratio').on("change mousemove", function() {
        currentLabel.innerHTML = slider.value + " Feet" ;
    });
    //TweenLite.to(vinyl, 3, {
    //    //attr:{height:250}
    //
    //});
});



