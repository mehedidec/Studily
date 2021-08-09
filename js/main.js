$(function(){
    //preloader part start
  $(window).on('load', function () {
    $(".preloader").delay(1200).fadeOut(function(){
        $('body').removeClass('prex');
    });
});

    //Tutor System Slide
    $('.tutor_sys_all').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '#tutor .prev',
        nextArrow: '#tutor .next',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    //About Slide
    $('.about_item_all').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '#about .prev',
        nextArrow: '#about .next'
      });

    //Centuries Slide
    $('.centuries_item_all').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '#centuries .prev',
        nextArrow: '#centuries .next'
      });

    //Testimonials Slide
    $('.testimonials_item_all').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '#testimonials .prev',
        nextArrow: '#testimonials .next',
        asNavFor: '.testimonials_item_all_middle',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
      });
    $('.testimonials_item_all_middle').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.testimonials_item_all',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
      });

    //iFrame
    $('.venobox').venobox({
      bgcolor: 'rgba(86, 7, 201, 0.85)',
      closeColor: 'rgba(86, 7, 201)'
  });

    //scroll
    $(window).scroll(function () { 
      var scrolling = $(this).scrollTop();

    //back to top
       if(scrolling > 20){
           $(".back_to_top i").fadeIn()
       }else{
           $(".back_to_top i").fadeOut()
       }
  });

    //back to top
   $(".back_to_top i").click(function () { 
       $('html, body').animate({
           scrollTop:0
       }, 1000);
  });

    //scroll animation
    var html_body = $('html, body');
    $('nav .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500,);
                return false;
            }
        }
    });

});