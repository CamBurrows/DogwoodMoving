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

$(document).on('click', '#dogwood-menu-toggle', function(e) {
  e.preventDefault();
  $('body').toggleClass('fixed-body');
  $(this).toggleClass('open');
  $('.mobile-nav-slideout').toggleClass('open')
});

//modal bg close
// $(document).ready(function(){
//   $('.modal-backdrop').on('click', function(){
//     console.log('triggered')
//     modal = $(this).parent().attr('id')

//     $('#' + modal).modal('hide')
//   })
// });

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


  //general contact
  function general_contact_success() {
    $('#general-contact').addClass('success');
    setTimeout(function(){
      $('#contact-modal').modal('hide')
    }, 4000)
  }
  function general_contact_error() {
  }

  var contact_form = $('#general-contact').get(0);

  $('#general-contact').on('submit', function(e){
    e.preventDefault();
    var data = new FormData(contact_form);
    ajax(contact_form.method, contact_form.action, data, general_contact_success, general_contact_error);
  })

  $('#contact-name').on('change', function(){
    name = $('#contact-name').val()
    $('#contact-subject').attr('value', 'Contact Form from' + name);
  })

  //application

  $('#apply-name').on('change', function(){
    apply_name = $('#apply-name').val()
    $('#apply-subject').attr('value', 'Job Application from' + apply_name);
  })

  function application_contact_success() {
    $('#application').addClass('success')
    setTimeout(function(){
      $('#apply-modal').modal('hide')
    }, 4000)
  }
  function application_contact_error() {
  }

  var application_form = $('#application').get(0);

  $('#application').on('submit', function(e){
    e.preventDefault();
    var data = new FormData(application_form);
    ajax(application_form.method, application_form.action, data, application_contact_success, application_contact_error);
  })

  //estimate

  $('#estimate-name').on('change', function(){
    estimate_name = $('#estimate-name').val()
    $('#estimate-subject').attr('value', 'Estimate Request from' + estimate_name);
  })

  function estimate_contact_success() {
    $('#estimate').addClass('success')
    setTimeout(function(){
      $('#estimate-modal').modal('hide')
    }, 4000)
  }
  function estimate_contact_error() {
  }

  var estimate_form = $('#estimate').get(0);

  $('#estimate').on('submit', function(e){
    e.preventDefault();
    var data = new FormData(estimate_form);
    ajax(estimate_form.method, estimate_form.action, data, estimate_contact_success, estimate_contact_error);
  })


  //ajax function
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