$(document).ready(function () {
    function toggleFloatingMenu() {
      $('.js-floating-nav').toggleClass('is-visible');
      $('.js-floating-nav-trigger').toggleClass('is-open');
    }
  
    $(".background-card").css("min-height", window.screen.availHeight + "px");
    $('.js-tooltip').tooltip();
    $('.js-floating-nav-trigger').on('click', function (e) {
      e.preventDefault();
      toggleFloatingMenu();
    });
    $('.js-floating-nav a').on('click', toggleFloatingMenu);
  });