$(document).ready(function(){
  $(".down-arrow").on('click', function(){
    $("html,body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 300);
  })

  $(".extend-gallery-button").on('click', function(){
    if ($("#thumbnails").hasClass('open-gallery')){
      $("#thumbnails").removeClass('open-gallery');
      $(".extend-gallery-button").html('More Images');
    }
    else {
      $("#thumbnails").addClass('open-gallery');
      $(".extend-gallery-button").html('Less Images');
    }
  })
})