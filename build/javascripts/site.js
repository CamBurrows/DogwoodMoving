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