(function($) {
  "use strict"; // Start of use strict

  // Scrolling blur
  $(window).scroll(function() {
    // Get scroll position
    var s = $(window).scrollTop(),
    // scroll value and opacity
    blurValue = (s / 540) * 5;
    // blur value 0 to 5
    $('.parallax-mirror').css('-webkit-filter', 'blur('+blurValue+'px)');
    $('.parallax-mirror').css('-moz-filter', 'blur('+blurValue+'px)');
    $('.parallax-mirror').css('-o-filter', 'blur('+blurValue+'px)');
    $('.parallax-mirror').css('-ms-filter', 'blur('+blurValue+'px)');
    $('.parallax-mirror').css('filter', 'blur('+blurValue+'px)');
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
