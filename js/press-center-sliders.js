// news-page slider
if($('.news-page-slider .card').length >= 3) {
    $('.cards_newsPage').slick({
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

    $('.cards_newsPage .slick-arrow').click(() => {
        $('.news-page-slider .first-number').text(() => {
            if((+$('.cards_newsPage .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.cards_newsPage .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.cards_newsPage .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })
    $('.cards_newsPage .card').mouseleave(() => {
        $('.news-page-slider .first-number').text(() => {
            if((+$('.cards_newsPage .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.cards_newsPage .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.cards_newsPage .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })
    $('.cards_newsPage .card').mouseout(() => {
        $('.news-page-slider .first-number').text(() => {
            if((+$('.cards_newsPage .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.cards_newsPage .slick-current').attr('data-slick-index') + 1);
            } else {
                return (+$('.cards_newsPage .slick-current').attr('data-slick-index')) + 1;
            }
        })
    })

    $('.news-page-slider .first-number').text(() => {
        if((+$('.cards_newsPage .slick-current').attr('data-slick-index') + 1) < 10) {
            return "0" + (+$('.cards_newsPage .slick-current').attr('data-slick-index') + 1);
        } else {
            return +$('.cards_newsPage .slick-current').attr('data-slick-index') + 1;
        }
    })

    
    $('.news-page-slider .number-slider span').text(() => {
        if($('.cards_newsPage .slick-dots li').length < 10) {
            return '0' + $('.cards_newsPage .slick-dots li').length;
        } else {
            return $('.cards_newsPage .slick-dots li').length;
        }
    })
}

// articles-page slider
if($('.articles-page-slider .card').length >= 3) {
  $('.cards_articlesPage').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrow: true,
      vertical: true,
      verticalSwiping: true,
      prevArrow: '<button type="button" class="slick-prev slick-prev_main"><img src="images/Arrow-prev.png"></button>',
      nextArrow: '<button type="button" class="slick-next slick-next_main"><img src="images/Arrow-next.png"></button>',
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: false,
            dots: false,
            vertical: false,
            verticalSwiping: false,
            centerMode: true,
            centerPadding: '0px'

          }
        }
      ]
    });

  $('.cards_articlesPage .slick-arrow').click(() => {
      $('.articles-page-slider .first-number').text(() => {
          if((+$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1) < 10) {
              return "0" + (+$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1);
          } else {
              return (+$('.cards_articlesPage .slick-current').attr('data-slick-index')) + 1;
          }
      })
  })
  $('.cards_articlesPage .card').mouseleave(() => {
      $('.articles-page-slider .first-number').text(() => {
          if((+$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1) < 10) {
              return "0" + (+$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1);
          } else {
              return (+$('.cards_articlesPage .slick-current').attr('data-slick-index')) + 1;
          }
      })
  })
  $('.cards_articlesPage .card').mouseout(() => {
      $('.articles-page-slider .first-number').text(() => {
          if((+$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1) < 10) {
              return "0" + (+$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1);
          } else {
              return (+$('.cards_articlesPage .slick-current').attr('data-slick-index')) + 1;
          }
      })
  })
  $('.articles-page-slider .first-number').text(() => {
      if((+$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1) < 10) {
          return "0" + (+$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1);
      } else {
          return +$('.cards_articlesPage .slick-current').attr('data-slick-index') + 1;
      }
  })

  
  $('.articles-page-slider .number-slider span').text(() => {
    let fullSpan = $('.cards_articlesPage .slick-slide').map((item, index) => {
      let temp = 0;
      if (index.classList.contains('slick-cloned') == false) {
        temp = item;
      }
      return temp;
    })
    var temp2 = 0;
    for(let i = 0; i < fullSpan.length; i++) {
      if(temp2 <= fullSpan[i]) {
        temp2 = fullSpan[i] - 2
      }
    }
    if(temp2 < 10) {
        return '0' + temp2;
    } else {
        return temp2;
    }
    // if($('.cards_articlesPage .slick-dots li').length < 10) {
    //     return '0' + $('.cards_articlesPage .slick-dots li').length;
    // } else {
    //     return $('.cards_articlesPage .slick-dots li').length;
    // }
  })
}