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
        //calc % of max
        percentage = (slider.value / slider.max) * 100;
        //Translate to y value needed for vinyl tween
        vinylDestination = 100 - percentage;
        TweenLite.to(vinyl,.2, {
            attr:{y: vinylDestination + "%"}
        });
        TweenLite.to(currentLabel,.2, {bottom: percentage + "%"});

    });

    $('#color').change(function(){
        switch (this.value) {
            case "Black":
                TweenMax.to(vinyl,.2, {fill:"#222"});
                break;
            case "Gray":
                TweenMax.to(vinyl,.2, {fill:"#bababa"});
                break;
            case "Red":
                TweenMax.to(vinyl,.2, {fill:"#E2361F"});
                break;
            case "Royal Blue":
                TweenMax.to(vinyl,.2, {fill:"#3B5B93"});
                break;
            case "Tan":
                TweenMax.to(vinyl,.2, {fill:"#D2B48C"});
                break;
            case "White":
                TweenMax.to(vinyl,.2, {fill:"#fff"});
                break;
            case "Yellow":
                TweenMax.to(vinyl,.2, {fill:"#FFFF19"});
                break;
            default:
                console.log("error");
        }
    });



    //TweenLite.to(vinyl, 3, {
    //    //attr:{height:250}
    //
    //});
});



