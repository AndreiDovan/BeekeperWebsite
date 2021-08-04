
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

 var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}