$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

    //scrollspy active on li tags that are parents of the a tags that get affected
    $('.scrollspy').on('scrollSpy:enter', function() {
    $('.navbar-fixed').find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active'); //add active class to the li of the nav link
    });
    $('.scrollspy').on('scrollSpy:exit', function() {
    $('.navbar-fixed').find('a[href="#'+$(this).attr('id')+'"]').parent().removeClass('active'); //remove active class to the li of the nav link
    });
  });
