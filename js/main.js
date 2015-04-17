$(document).ready(function(){
  var height = document.getElementById("height");
  var width = document.getElementById("width");
	var slider = document.getElementById("ratio");
	slider.max = 10;
  var sqFt;
        $('form').on('submit', function(event){
          event.preventDefault();
            var newMax = parseInt(height.value);
  					slider.max = newMax;
          	sqFt = parseInt(height.value ) * parseInt(width.value);
  					        	
        });
  
    });




