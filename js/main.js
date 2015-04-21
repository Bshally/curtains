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
    //END SVG OBJ's
	slider.max = 10;
    var sqFt;
    $('form').on('submit', function(event){
        event.preventDefault();
        var newMax = parseInt(height.value);
        console.log(topLabel);
        topLabel.innerHTML = newMax + " Feet";
        console.log(topLabel);
        slider.max = newMax;
      	sqFt = parseInt(height.value ) * parseInt(width.value);
    });
    //TweenLite.to(vinyl, 3, {
    //    //attr:{height:250}
    //
    //});
});



