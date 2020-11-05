$(document).ready(function() {


    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60%'
    });

    /*Scroll on buttons*/
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animat__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__pulse');
    }, {
        offset: '50%'
    });

    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('js--main-nav');
        var icon = $('js--nav-icon');

        nav.slideToggle(200);
        if(icon.hasClass('menu-outline')) {
           icon.addClass('close-outline')
           icon.removeClass('menu-outline')
        }else {
           icon.addClass('menu-outline')
           icon.removeClass('close-outline')
        }

    });

    /* Maps */
    var map = new GMaps({
      div: '.map',
      lat: 38.7436266,
      lng: -9.05,
      zoom: 12
    });

    map.addMarker({
      lat: 38.7436266,
      lng: -9.1602037,
      title: 'Lima',
      infoWindow: {
          content: '<p>Our Lisbon HQ</p>'
        }
    });

});
