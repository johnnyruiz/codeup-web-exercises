
//$('dd').addClass('invisible');

$('#show').click(function(){
    $('dd').toggle('invisible');
});

$('dt').click(function(){
   $(this).addClass('highlight');
});
$('#highlight').click(function(){
    $('li').toggleClass('highlight');
});
$('h3').click(function(){
   $('ul').children('li').css('font-weight', 'bold');
});
$('li').click(function(){
   $(this).parent('ul').children('li').eq(0).css('color', 'blue');
});

$('#YB').click(function(){
    if($(this).parent('div').hasClass('yellowstone')){
        $(this).parent('div').removeClass('yellowstone').addClass('glacier');
        $('#GB').parent('div').removeClass('glacier').addClass('yellowstone');
    } else if ($(this).parent('div').hasClass('glacier')){
        $(this).parent('div').removeClass('glacier').addClass('yellowstone');
        $('#GB').parent('div').removeClass('yellowstone').addClass('glacier');
    } else if ($(this).parent('div').hasClass('grand')){
        $(this).parent('div').removeClass('grand').addClass('yellowstone');
        $('#GB').parent('div').removeClass('yellowstone').addClass('grand');
    }
});
$('#GCB').click(function(){
    if($(this).parent('div').hasClass('yellowstone')){
        $(this).parent('div').removeClass('yellowstone').addClass('glacier');
        $('#GB').parent('div').removeClass('glacier').addClass('yellowstone');
    } else if ($(this).parent('div').hasClass('glacier')){
        $(this).parent('div').removeClass('glacier').addClass('yellowstone');
        $('#GB').parent('div').removeClass('yellowstone').addClass('glacier');
    } else if ($(this).parent('div').hasClass('grand')){
        $(this).parent('div').removeClass('grand').addClass('yellowstone');
        $('#GB').parent('div').removeClass('yellowstone').addClass('grand');
    }
});
$('#GB').click(function(){
    if($(this).parent('div').hasClass('yellowstone')){
        $(this).parent('div').removeClass('yellowstone').addClass('glacier');
        $('#GB').parent('div').removeClass('glacier').addClass('yellowstone');
    } else if ($(this).parent('div').hasClass('glacier')){
        $(this).parent('div').removeClass('glacier').addClass('yellowstone');
        $('#GB').parent('div').removeClass('yellowstone').addClass('glacier');
    } else if ($(this).parent('div').hasClass('grand')){
        $(this).parent('div').removeClass('grand').addClass('yellowstone');
        $('#GB').parent('div').removeClass('yellowstone').addClass('grand');
    }
});



