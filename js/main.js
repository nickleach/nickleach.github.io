;( function(){

  'use strict';

  //Initialize Materialze Functions


    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();

    setTimeout(function() {
      Materialize.showStaggeredList('#staggered-list');

    }, 1500);


    var options = [

    {selector: '.image-fades', offset: 100, callback: 'Materialize.fadeInImage(".image-fades")' },
    {selector: '.image-fades2', offset: 100, callback: 'Materialize.fadeInImage(".image-fades2")' }

    ];


    Materialize.scrollFire(options);

    $('.modal-trigger').leanModal();
// class to add to nav-header : light-blue darken-4 and nav-wrapper


// Window scroll stuff

   $(window).scroll(function(){
    // change nav
     var scroll = $(window).scrollTop();
     if (scroll >= 300){
      $('#nav-mobile').removeClass('hidden-nav');
      $('.staggered-nav').addClass('hidden-nav');
      $("nav").removeClass("transparent").addClass("nav-header-scroll");
     }else {
      $('#nav-mobile').addClass('hidden-nav');
      $('.staggered-nav').removeClass('hidden-nav');
      $("nav").addClass("transparent").removeClass("nav-header-scroll");
     }

     // add active class when over the link
      var scrollPos = $(window).scrollTop() + 100;
      $('#nav-mobile li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#nav-mobile li').removeClass("nav-active");
          currLink.closest('li').addClass("nav-active");
        }
      });

      // Active class to contact tab when at bottom of page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $('#nav-mobile li').removeClass("nav-active");
        $('#contactTab').addClass('nav-active');
    }
   });

    // custom scroll on click

   $('nav a').click(function () {
    var $href = $(this).attr('href');
    $('body').stop().animate({
      scrollTop: $($href).offset().top
    }, 1000);
    return false;
  });


}());
