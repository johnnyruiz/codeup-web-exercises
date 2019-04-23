"use strict";
/////////////  NOTES  /////////////////////
//***************************************//
//selects all the h1 elements on the page
//.html("") will change the inner html
//$("h1").html("")
//.css("property", "value") to change the css
//$("#id") to select ID
//$(".class") to select class
//$("*")
//$("selector", "another selector") to select multiple selectors
//$("h1:nth-child(3)"). will select the 3rd h1 in the document


//will fire off on load
//$(document).ready(function() {
//    alert( 'The DOM has finished loading!' );
//    // INSERT JAVASCRIPT CODE SAMPLE HERE
//
//});

//$("#sameId").html("<h5> Now I'm an h5 </h5>");
//
//$(".city").css("border", "solid 1px red");

// alert exp
// alert($("#cityList").html());

//$("#hiding").click(function(){
//    $("img").slideUp();
//});
//$("#showing").click(function(){
//    $("img").slideDown();
//});
//
//$("li, ul").css("font-size", "20px");
//
//$("p").css("background-color", "yellow");
//
//$("#bottomContent").append("<h1>Fading out...and In</h1>").fadeOut(6000).fadeIn(8000);


$("h1").click(function(){
    $(this).css("background", "blue");
});

$("p").dblclick(function(){
   $(this).css("font-size", "18px");
});

$("li").hover(function() {
    $(this).css("color", "red");
}, function(){
    $(this).css("color", "black");
});

$('#hiding').click(function(){
   $('img').fadeOut(1000) ;
});
$('#showing').click(function(){
    $('img').fadeIn(1000) ;
});
