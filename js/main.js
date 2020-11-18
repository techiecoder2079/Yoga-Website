"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
            Gallery filter
        --------------------*/
    $(".gallery-controls ul li").on("click", function () {
      $(".gallery-controls ul li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".gallery-filter").length > 0) {
      var containerEl = document.querySelector(".gallery-filter");
      var mixer = mixitup(containerEl);
    }

    $(".blog-gird").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
    });
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Navigation
	--------------------*/
  //   $(".mobile-menu").slicknav({
  //     prependTo: "#mobile-menu-wrap",
  //     allowParentLinks: true,
  //   });

  /*------------------
		Menu Hover
	--------------------*/
  $(".header-section .nav-menu .mainmenu ul li").on("mousehover", function () {
    $(this).addClass("active");
  });
  $(".header-section .nav-menu .mainmenu ul li").on("mouseleave", function () {
    $(".header-section .nav-menu .mainmenu ul li").removeClass("active");
  });

  /*------------------
        Carousel Slider
    --------------------*/
  //   $(".hero-items").owlCarousel({
  //     loop: true,
  //     margin: 0,
  //     nav: true,
  //     items: 1,
  //     dots: true,
  //     animateOut: "fadeOut",
  //     animateIn: "fadeIn",
  //     navText: [
  //       '<i class="arrow_carrot-left"></i>',
  //       '<i class="arrow_carrot-right"></i>',
  //     ],
  //     smartSpeed: 1200,
  //     autoHeight: false,
  //   });

  /*------------------
        Testimonial Slider
    --------------------*/
  //   $(".testimonial-slider").owlCarousel({
  //     loop: true,
  //     margin: 0,
  //     nav: false,
  //     items: 1,
  //     dots: true,
  //     navText: [
  //       '<i class="arrow_carrot-left"></i>',
  //       '<i class="arrow_carrot-right"></i>',
  //     ],
  //     smartSpeed: 1200,
  //     autoHeight: false,
  //     autoplay: true,
  //   });

  /*------------------
        Magnific Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  $(".image-popup").magnificPopup({
    type: "image",
  });

  /*------------------
        Magnific Popup
    --------------------*/
  $(".show-result-select").niceSelect();

  /*------------------
       Timetable Filter
    --------------------*/
  $(".timetable-controls ul li").on("click", function () {
    var tsfilter = $(this).data("tsfilter");
    $(".timetable-controls ul li").removeClass("active");
    $(this).addClass("active");

    if (tsfilter == "all") {
      $(".classtime-table").removeClass("filtering");
      $(".ts-item").removeClass("show");
    } else {
      $(".classtime-table").addClass("filtering");
    }
    $(".ts-item").each(function () {
      $(this).removeClass("show");
      if ($(this).data("tsmeta") == tsfilter) {
        $(this).addClass("show");
      }
    });
  });
})(jQuery);

$(function () {
  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // AOS ANIMATION
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  // SMOOTHSCROLL NAVBAR
  $(function () {
    $(".navbar a, .hero-text a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
});
