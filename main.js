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

    // function windowSize() {
    //     windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
    //     windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    //
    // }
    // windowSize();
    // if (windowWidth < 768) {
    //     $('.parallax').removeClass('.parallax');
    //     console.log('width is below 768px !');
    // }
    // // For example, get window size on window resize
    // $(window).resize(function() {
    //     windowSize();
    //     console.log('width is :', windowWidth, 'Height is :', windowHeight);
    //     if (windowWidth < 768) {
    //         $('.parallax').removeClass('.parallax');
    //         console.log('width is below 768px !');
    //     }
    // });

    $('#alert_close').click(function(){
        $("#thankyou_message").fadeOut("slow", function() {
        });
    });
  });
