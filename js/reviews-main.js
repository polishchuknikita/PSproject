
if($('.slider-wrap_reviews .card').length >= 3) {
    $('.slider__review').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: '<button type="button" class="slick-prev slick-prev_main"><img src="images/Arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next_main"><img src="images/Arrow-next.png"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              swipe: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

    $('.slider__review .slick-arrow').click(() => {
        $('.slider-wrap_reviews .first-number').text(() => {
            if((+$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.slider-wrap_reviews .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })
    $('.slider__review .card').mouseleave(() => {
        $('.slider-wrap_reviews .first-number').text(() => {
            if((+$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.slider-wrap_reviews .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })
    $('.slider__review .card').mouseout(() => {
        $('.slider-wrap_reviews .first-number').text(() => {
            if((+$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.slider-wrap_reviews .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })
    $('.slider-wrap_reviews .first-number').text(() => {
        if((+$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1) < 10) {
            return "0" + (+$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1);
        } else {
            return +$('.slider-wrap_reviews .slick-current').attr('data-slick-index') + 1;
        }
    })

    
    $('.slider-wrap_reviews .number-slider span').text(() => {
        if($('.slider__review .slick-dots li').length < 10) {
            return '0' + $('.slider__review .slick-dots li').length;
        } else {
            return $('.slider__review .slick-dots li').length;
        }
    })
}

if($('.slider-wrap_services-reviews .card').length >= 3) {
    $('.slider__services-page-reviews').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: '<button type="button" class="slick-prev slick-prev_main"><img src="images/Arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next_main"><img src="images/Arrow-next.png"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              swipe: true,
              slidesToShow: 2
            }
          },
          { 
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

    $('.slider__services-page-reviews .slick-arrow').click(() => {
        $('.slider-wrap_services-reviews .first-number').text(() => {
            if((+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })
    $('.slider__services-page-reviews .card').mouseleave(() => {
        $('.slider-wrap_services-reviews .first-number').text(() => {
            if((+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })
    $('.slider__services-page-reviews .card').mouseout(() => {
        $('.slider-wrap_services-reviews .first-number').text(() => {
            if((+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })
    $('.slider-wrap_services-reviews .first-number').text(() => {
        if((+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1) < 10) {
            return "0" + (+$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1);
        } else {
            return +$('.slider-wrap_services-reviews .slick-current').attr('data-slick-index') + 1;
        }
    })

    
    $('.slider-wrap_services-reviews .number-slider span').text(() => {
        if($('.slider__services-page-reviews .slick-dots li').length < 10) {
            return '0' + $('.slider__services-page-reviews .slick-dots li').length;
        } else {
            return $('.slider__services-page-reviews .slick-dots li').length;
        }
    })
}
