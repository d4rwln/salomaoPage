
// Header Toggle
var sub_height = $('.tms-navbar').height();
$(function () {
  $('.tms-toogle-down a').on('click', function (e) {
    // e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - sub_height }, 700, 'linear');
  });
});

// Smooth scrolling
if ($(window).width() >= 768) {
  var substractHeight = $('.tms-navbar').height();
  // console.log(substractHeight);
} else {
  var substractHeight = $('.navbar-header').height();
}
$('.tms-navbar a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - substractHeight
        }, 500, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



$(window).scroll(function () {
  if ($(window).width() > 1024) {
    if ($(window).scrollTop() >= 50) {
      $(".navbar.tms-navbar").addClass("bgcolor");
      $(".navbar.tms-navbar .nav.navbar-nav li a").addClass("tms-scroll-nav-a-color");
    }
    else {
      $(".navbar.tms-navbar").removeClass("bgcolor")
      $(".navbar.tms-navbar .nav.navbar-nav li a").removeClass("tms-scroll-nav-a-color");
    }
  }
  else {
    if ($(window).scrollTop() >= 50) {
      // 			$(".navbar.tms-navbar").addClass("bgcolor");
      // $(".navbar.tms-navbar .nav.navbar-nav li a").addClass("tms-scroll-nav-a-color");
    }
    else {
      $(".navbar.tms-navbar").removeClass("bgcolor")
      $(".navbar.tms-navbar .nav.navbar-nav li a").removeClass("tms-scroll-nav-a-color");
    }
  }
});
$(window).scroll(function () {
  if ($(window).width() > 1024) {
    $(".navbar.tms-navbar .nav.tms-nav li a").on("click", function () {
      $(".navbar.tms-navbar .nav.tms-nav li a").removeClass("active");
      $(this).addClass("active");
    })
  }
  else {
    $(".navbar.tms-navbar .nav.tms-nav li a").on("click", function () {
      $(".navbar.tms-navbar .nav.tms-nav li a").removeClass("active");
    })
  }
});
// Navbar collapsing
$(".navbar-nav li a").click(function (event) {
  var toggle = $(".navbar-toggle").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse('hide');
  }
});