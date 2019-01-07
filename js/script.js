$(document).ready(function(){

  $('.preview-btn').on('click', function(e){
    e.preventDefault();

    $(this).fadeOut(500);
    setTimeout(function(){
      $('.bootstrap-carusel').fadeIn(500);
    }, 5000);
    
  })
})