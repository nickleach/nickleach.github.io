;( function(){

  'use strict';
  //Initialize Materialze Functions


    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();

    setTimeout(function() {
      Materialize.showStaggeredList('#staggered-list');
    }, 2000);

// class to add to nav-header : light-blue darken-4 and nav-wrapper

  // Add active class on click nav bar

  $('#nav-mobile').on('click', 'a', function(){
    $('li').removeClass('active');
    $(this).closest('li').addClass('active');
  });

  // Remove all active classes when name clicked
  $('.brand-logo').on('click', function(){
    $('li').removeClass('active');
  });

}());
