;( function(){

  'use strict';
  //Initialize Materialze Functions

    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();

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
