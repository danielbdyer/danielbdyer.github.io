/* Page loader */

$(window).load(function() {
  $(".loader-item")
    .delay(500)
    .fadeOut();
  $("#loading-background")
    .delay(1000)
    .fadeOut("slow");
});

/* Sticky navigation */

$(document).ready(function() {
  $("#navigation").sticky({ topSpacing: 0, zIndex: 99999 });
});

/* Smooth scroll */

(function($) {
  "use strict";
  $(".page-scroll a[href^='#']").on("click", function(e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(hash).offset().top
        },
        2000,
        "easeOutExpo"
      );
  });
})(jQuery);

$(".navbar-collapse ul li a").click(function() {
  $(".navbar-toggle:visible").click();
});

/* Scroll to top */

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});

$(".scrollup").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 2000);
  return false;
});
