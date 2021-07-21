
document.getElementById("copy").innerHTML += new Date().getFullYear();

$(document).ready(function(){
    $('#name-wrap').fadeIn(2000);
});

$(document).ready(function(){
    $('.logo-img').fadeIn(2000);
});
/*
$(document).ready(function(){
    $(".logo-img").click(function(){
    $(".logo-img").animate({transform: 'rotate(45deg)'});
});
});
*/

/*
if($(window).width() >= 768)
{
    $(document).ready(function(){
        $('#secondary-img').fadeIn(2000);
    });
    
}*/

// Functie pentru scroll cand apesi pe sageata 

$(document).ready(function(){
    $('.sageata').click(function(){
        var y = $('.sageata').scrollTop();   
        var window_height = window.innerHeight - 46;
        $('html, body').animate({ scrollTop: y + window_height }) 
    }); 
 });
