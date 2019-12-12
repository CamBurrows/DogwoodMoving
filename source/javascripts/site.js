window.cyclerDefaultFadeOutTime = 0;
window.imageCyclerInterval = 5000;
var allowScroll = true
var dogwoodPageContent = {};
dogwoodPageContent.prevScrollpos = window.pageYOffset;
dogwoodPageContentcurrentScrollPos = window.pageYOffset;
dogwoodPageContent.prevScrollposFilter = window.pageYOffset;

$(document).ready(function(){
})
$(document).scroll(function(){
  navHideShow();
})

function navHideShow() {
  dogwoodPageContent.currentScrollPos = window.pageYOffset;
  if (window.scrollY > 70 && allowScroll) {
    if (dogwoodPageContent.prevScrollpos >= dogwoodPageContent.currentScrollPos) {
      $(".navbar-wrap").removeClass("compress-nav");
      $("#dogwood-menu-toggle").removeClass('compressed')
    } else {
      $(".navbar-wrap").addClass("compress-nav");
      $("#dogwood-menu-toggle").addClass('compressed')
    }
  }
  dogwoodPageContent.prevScrollpos = dogwoodPageContent.currentScrollPos;
}

//faq
$(document).ready(function(){
  $('.question').on('click', function(){
    block = $(this).attr('id');
    $(this).toggleClass('open');
    $('.'+ block).toggleClass('open');
  })
  $('.close-faq').on('click', function(){
    block = $(this).attr('class').split(' ')[0];
    $('.answer.'+ block).toggleClass('open');
    $('#'+ block).toggleClass('open');
  })
  $('.jump-to').on('click', function(){
    block = $(this).attr('class').split(' ')[1];
    $('html, body').animate({
      scrollTop: ($("#" + block).offset().top) - 100
    }, 2000);
  })
})  
//ajax forms
$(document).ready(function(){

  function contact_success() {
    $('.contact-form').addClass('success')
  }

  function contact_error() {
  }

  var contact_form = $('.contact-form').get(0);

  $('.contact-form').on('submit', function(e){
    e.preventDefault();
    var data = new FormData(contact_form);
    ajax(contact_form.method, contact_form.action, data, contact_success, contact_error);
  })

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
})