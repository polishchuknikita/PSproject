$(document).ready( () => {
  
    if($('.cards_news-main-wrap .card').length >= 3) {
        $('.cards_news').slick({
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
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    swipe: true,
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                    arrow: false,
                    swipe: true,
                    dots: false
                  }
                }
              ]
            });

        $('.cards_news .slick-arrow').click(() => {
            $('.cards_news-main-wrap .first-number').text(() => {
                if((+$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1);
                } else {
                    return (+$('.cards_news-main-wrap .slick-current').attr('data-slick-index')) + 1;
                }
            })
        })
        $('.cards_news .card').mouseleave(() => {
            $('.cards_news-main-wrap .first-number').text(() => {
                if((+$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1);
                } else {
                    return (+$('.cards_news-main-wrap .slick-current').attr('data-slick-index')) + 1;
                }
            })
        })
        $('.cards_news .card').mouseout(() => {
            $('.cards_news-main-wrap .first-number').text(() => {
                if((+$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1);
                } else {
                    return (+$('.cards_news-main-wrap .slick-current').attr('data-slick-index')) + 1;
                }
            })
        })
        $('.cards_news-main-wrap .first-number').text(() => {
            if((+$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1);
            } else {
                return +$('.cards_news-main-wrap .slick-current').attr('data-slick-index') + 1;
            }
        })


        $('.cards_news-main-wrap .second-number span').text(() => {
            if($('.cards_news .slick-dots li').length < 10) {
                return '0' + $('.cards_news .slick-dots li').length;
            } else {
                return $('.cards_news .slick-dots li').length;
            }
        })
    }
  })