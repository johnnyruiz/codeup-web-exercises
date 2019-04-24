
"use strict";

$(document).keyup(function(event){
    console.log(event.key);
});
$('#start').click(function(){
    $('#container').html('<img src="https://thumbs.gfycat.com/SpitefulLoneBittern-small.gif" alt="Castlevania">');
    $('#theme').trigger('play');
    $('img').trigger('stop');
});

var code = 0;

$(document).keyup(function(event){
   if(event.key === "ArrowUp" && code === 0) {
       code += 1;
   } else if(event.key === "ArrowUp" && code === 1){
       code += 1;
   }
   if(event.key === "ArrowDown" && code === 2){
       code += 1;
   } else if(event.key === "ArrowDown" && code === 3){
       code += 1;
   }
   if(event.key === "ArrowLeft" && code === 4){
       code += 1;
   }
    if(event.key === "ArrowRight" && code === 5){
        code += 1;
    }
    if(event.key === "ArrowLeft" && code === 6){
        code += 1;
    }
    if(event.key === "ArrowRight" && code === 7){
        code += 1;
    }
    if(event.key === "a" && code === 8){
        code += 1;
    }
    if(event.key === "b" && code === 9){
        code += 1;
    }
    if(event.key === "Enter" && code === 10){
        code += 1;
    }
   EasterEgg(code);
   return code;
});
function EasterEgg(a) {
    if (a === 11) {
        $('#Lives').html("<p>Player Lives: 35</p>").css("color", "green").css("font-size", "30px");
        $("#code").trigger('play');
    }
}
