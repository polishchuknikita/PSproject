$(document).ready( () => {
    const scrollPxClientsLeft = (scroll, dynamic, static) => {
        return static + (scroll * dynamic) + 'px';
    }
    const scrollPxClientsOpacity = (scroll, dynamic, static) => {
        return static + (scroll * dynamic);
    }
    const scrollPxClientsTransformTop = (scroll, dynamic, static) => {
        return 'translateY(' + (static - (scroll * dynamic)) + 'px)';
    }
    if ($(this).width() >= 1400) {
        $(window).scroll( () => {
            let scrollPxClients = $(window).scrollTop();
            let test100 = scrollPxClients - 3500;
            let test101 = scrollPxClients - 4000;

            if(scrollPxClients > 3500 && scrollPxClients <= 4270) {
                if(scrollPxClients < 3800) {
                    $('.section__clients .section__title').css('left', scrollPxClientsLeft(test100, 2, -400));
                    $('.section__clients .section__title').css('opacity', scrollPxClientsOpacity(test100, 0.0033, 0));
                    $('.section__clients .block__title').css('left', scrollPxClientsLeft(test100, 1.363, -400));
                    $('.section__clients .block__title').css('opacity', scrollPxClientsOpacity(test100, 0.0033, 0));

                } else {
                    $('.section__clients .section__title').css('opacity', '1');
                    $('.section__clients .block__title').css('opacity', '1');

                }
                if (scrollPxClients > 3900) {
                    if (scrollPxClients <= 4000) {
                        $('.clients_main .client_first').css('opacity', scrollPxClientsOpacity((scrollPxClients - 3900), 0.0111, 0));
                        $('.clients_main .client_first').css('transform', scrollPxClientsTransformTop((scrollPxClients - 3900), 3, 300));
                    }
                    if (scrollPxClients > 4000 && scrollPxClients <= 4090) {
                        $('.clients_main .client_first').css('transform', 'translateY(0px)');
                        $('.clients_main .client_second').css('opacity', scrollPxClientsOpacity((scrollPxClients - 4000), 0.0111, 0));
                        $('.clients_main .client_second').css('transform', scrollPxClientsTransformTop((scrollPxClients - 4000), 3.333, 300));
                    }
                    if (scrollPxClients > 4090 && scrollPxClients <= 4180) {
                        $('.clients_main .client_second').css('transform', 'translateY(0px)');
                        $('.clients_main .client_third').css('opacity', scrollPxClientsOpacity((scrollPxClients - 4090), 0.0111, 0));
                        $('.clients_main .client_third').css('transform', scrollPxClientsTransformTop((scrollPxClients - 4090), 3.333, 300));
                    }
                    if (scrollPxClients > 4180 && scrollPxClients <= 4270) {
                        $('.clients_main .client_third').css('transform', 'translateY(0px)');
                        $('.clients_main .client_fourth').css('opacity', scrollPxClientsOpacity((scrollPxClients - 4180), 0.0111, 0));
                        $('.clients_main .client_fourth').css('transform', scrollPxClientsTransformTop((scrollPxClients - 4180), 3.333, 300));
                    }
                }
            }
            
            if(scrollPxClients < 3900) {
                $('.clients_main .client_first').css('opacity', '0');
                $('.clients_main .client_second').css('opacity', '0');
                $('.clients_main .client_third').css('opacity', '0');
                $('.clients_main .client_fourth').css('opacity', '0');
            }

            if(scrollPxClients > 4270) {
                $('.clients_main .client_first').css('transform', 'translateY(0px)');
                $('.clients_main .client_second').css('transform', 'translateY(0px)');
                $('.clients_main .client_third').css('transform', 'translateY(0px)');
                $('.clients_main .client_fourth').css('transform', 'translateY(0px)');
                $('.clients_main .client_first').css('opacity', '1');
                $('.clients_main .client_second').css('opacity', '1');
                $('.clients_main .client_third').css('opacity', '1');
                $('.clients_main .client_fourth').css('opacity', '1');
            }
        });
    } else if ($(this).width() >= 1280) {
        $(window).scroll( () => {
            let scrollPxClientsMob = $(window).scrollTop();
            if(scrollPxClientsMob > 3700 && scrollPxClientsMob <= 4470) {
                if(scrollPxClientsMob < 4100) {
                    $('.section__clients .section__title').css('left', scrollPxClientsLeft((scrollPxClientsMob - 4100), 2, 0));
                    $('.section__clients .section__title').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 3900), 0.005, 0));
                    $('.section__clients .block__title').css('left', scrollPxClientsLeft((scrollPxClientsMob - 3900), 1, -200));
                    $('.section__clients .block__title').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 3900), 0.005, 0));
                } else {
                    $('.section__clients .section__title').css('opacity', '1');
                    $('.section__clients .block__title').css('opacity', '1');
                }
                if (scrollPxClientsMob > 4100 && scrollPxClientsMob <= 4470) {
                    if (scrollPxClientsMob <= 4200) {
                        $('.clients_main .client_first').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4100), 0.0111, 0));
                        $('.clients_main .client_first').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4100), 3, 300));
                    }
                    if (scrollPxClientsMob > 4200 && scrollPxClientsMob <= 4290) {
                        $('.clients_main .client_first').css('transform', 'translateY(0px)');
                        $('.clients_main .client_second').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4200), 0.0111, 0));
                        $('.clients_main .client_second').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4200), 3.333, 300));
                    }
                    if (scrollPxClientsMob > 4290 && scrollPxClientsMob <= 4380) {
                        $('.clients_main .client_second').css('transform', 'translateY(0px)');
                        $('.clients_main .client_third').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4290), 0.0111, 0));
                        $('.clients_main .client_third').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4290), 3.333, 300));
                    }
                    if (scrollPxClientsMob > 4380 && scrollPxClientsMob <= 4470) {
                        $('.clients_main .client_third').css('transform', 'translateY(0px)');
                        $('.clients_main .client_fourth').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4380), 0.0111, 0));
                        $('.clients_main .client_fourth').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4380), 3.333, 300));
                    }
                }
            }
            if(scrollPxClientsMob < 4100) {
                $('.clients_main .client_first').css('opacity', '0px');
                $('.clients_main .client_second').css('opacity', '0px');
                $('.clients_main .client_third').css('opacity', '0px');
                $('.clients_main .client_fourth').css('opacity', '0px');
            }
            if(scrollPxClientsMob > 4470) {
                $('.clients_main .client_first').css('transform', 'translateY(0px)');
                $('.clients_main .client_second').css('transform', 'translateY(0px)');
                $('.clients_main .client_third').css('transform', 'translateY(0px)');
                $('.clients_main .client_fourth').css('transform', 'translateY(0px)');
                $('.clients_main .client_first').css('opacity', '1');
                $('.clients_main .client_second').css('opacity', '1');
                $('.clients_main .client_third').css('opacity', '1');
                $('.clients_main .client_fourth').css('opacity', '1');
            }
        })
    } else if ($(this).width() >= 1200) {
        $(window).scroll( () => {
            let scrollPxClientsMob = $(window).scrollTop();
            if(scrollPxClientsMob > 3750 && scrollPxClientsMob <= 4470) {
                if(scrollPxClientsMob < 3950) {
                    $('.section__clients .section__title').css('left', scrollPxClientsLeft((scrollPxClientsMob - 3750), 3.6, -400));
                    $('.section__clients .section__title').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 3750), 0.005, 0));
                    $('.section__clients .block__title').css('left', scrollPxClientsLeft((scrollPxClientsMob - 3750), 1, -200));
                    $('.section__clients .block__title').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 3750), 0.005, 0));
                } else {
                    $('.section__clients .section__title').css('opacity', '1');
                    $('.section__clients .block__title').css('opacity', '1');
                }
                if (scrollPxClientsMob > 4100 && scrollPxClientsMob <= 4470) {
                    if (scrollPxClientsMob <= 4200) {
                        $('.clients_main .client_first').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4100), 0.0111, 0));
                        $('.clients_main .client_first').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4100), 3, 300));
                    }
                    if (scrollPxClientsMob > 4200 && scrollPxClientsMob <= 4290) {
                        $('.clients_main .client_first').css('transform', 'translateY(0px)');
                        $('.clients_main .client_second').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4200), 0.0111, 0));
                        $('.clients_main .client_second').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4200), 3.333, 300));
                    }
                    if (scrollPxClientsMob > 4290 && scrollPxClientsMob <= 4380) {
                        $('.clients_main .client_second').css('transform', 'translateY(0px)');
                        $('.clients_main .client_third').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4290), 0.0111, 0));
                        $('.clients_main .client_third').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4290), 3.333, 300));
                    }
                    if (scrollPxClientsMob > 4380 && scrollPxClientsMob <= 4470) {
                        $('.clients_main .client_third').css('transform', 'translateY(0px)');
                        $('.clients_main .client_fourth').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4380), 0.0111, 0));
                        $('.clients_main .client_fourth').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4380), 3.333, 300));
                    }
                }
            }
            
            if(scrollPxClientsMob < 4100) {
                $('.clients_main .client_first').css('opacity', '0px');
                $('.clients_main .client_second').css('opacity', '0px');
                $('.clients_main .client_third').css('opacity', '0px');
                $('.clients_main .client_fourth').css('opacity', '0px');
            }
            if(scrollPxClientsMob > 4470) {
                $('.clients_main .client_first').css('transform', 'translateY(0px)');
                $('.clients_main .client_second').css('transform', 'translateY(0px)');
                $('.clients_main .client_third').css('transform', 'translateY(0px)');
                $('.clients_main .client_fourth').css('transform', 'translateY(0px)');
                $('.clients_main .client_first').css('opacity', '1');
                $('.clients_main .client_second').css('opacity', '1');
                $('.clients_main .client_third').css('opacity', '1');
                $('.clients_main .client_fourth').css('opacity', '1');
            }
        })
    } else if (($(this).width() >= 992) && ($(this).width() < 1200)) {
        $(window).scroll( () => {
            let scrollPxClientsMob = $(window).scrollTop();
            if(scrollPxClientsMob > 4200 && scrollPxClientsMob <= 5100) {
                if(scrollPxClientsMob < 4600) {
                    $('.section__clients .section__title').css('left', scrollPxClientsLeft((scrollPxClientsMob - 4200), 1, -400));
                    $('.section__clients .section__title').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4200), 0.0025, 0));
                    $('.section__clients .block__title').css('left', scrollPxClientsLeft((scrollPxClientsMob - 4200), 1, -400));
                    $('.section__clients .block__title').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4200), 0.0025, 0));
                }  else {
                    $('.section__clients .section__title').css('opacity', '1');
                    $('.section__clients .block__title').css('opacity', '1');
                }
                if (scrollPxClientsMob > 4600 && scrollPxClientsMob <= 4970) {
                    if (scrollPxClientsMob <= 4700) {
                        $('.clients_main .client_first').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4600), 0.0111, 0));
                        $('.clients_main .client_first').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4600), 3, 300));
                    }
                    if (scrollPxClientsMob > 4700 && scrollPxClientsMob <= 4790) {
                        $('.clients_main .client_first').css('transform', 'translateY(0px)');
                        $('.clients_main .client_second').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4700), 0.0111, 0));
                        $('.clients_main .client_second').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4700), 3.333, 300));
                    }
                    if (scrollPxClientsMob > 4790 && scrollPxClientsMob <= 4880) {
                        $('.clients_main .client_second').css('transform', 'translateY(0px)');
                        $('.clients_main .client_third').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4790), 0.0111, 0));
                        $('.clients_main .client_third').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4790), 3.333, 300));
                    }
                    if (scrollPxClientsMob > 4880 && scrollPxClientsMob <= 4970) {
                        $('.clients_main .client_third').css('transform', 'translateY(0px)');
                        $('.clients_main .client_fourth').css('opacity', scrollPxClientsOpacity((scrollPxClientsMob - 4880), 0.0111, 0));
                        $('.clients_main .client_fourth').css('transform', scrollPxClientsTransformTop((scrollPxClientsMob - 4880), 3.333, 300));
                    }
                }
            }
            
            if(scrollPxClientsMob < 4600) {
                $('.clients_main .client_first').css('opacity', '0px');
                $('.clients_main .client_second').css('opacity', '0px');
                $('.clients_main .client_third').css('opacity', '0px');
                $('.clients_main .client_fourth').css('opacity', '0px');
            }
            if(scrollPxClientsMob > 4970) {
                $('.clients_main .client_first').css('transform', 'translateY(0px)');
                $('.clients_main .client_second').css('transform', 'translateY(0px)');
                $('.clients_main .client_third').css('transform', 'translateY(0px)');
                $('.clients_main .client_fourth').css('transform', 'translateY(0px)');
                $('.clients_main .client_first').css('opacity', '1');
                $('.clients_main .client_second').css('opacity', '1');
                $('.clients_main .client_third').css('opacity', '1');
                $('.clients_main .client_fourth').css('opacity', '1');
            }
        }
    )}
    if($('.clients_main .client').length >= 4) {
        $('.clients_main').slick({
            infinite: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrow: true,
            prevArrow: '<button type="button" class="slick-prev slick-prev_main"><img src="images/Arrow-prev.png"></button>',
            nextArrow: '<button type="button" class="slick-next slick-next_main"><img src="images/Arrow-next.png"></button>',
            responsive: [
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
              
        $('.clients_main .slick-arrow').click(() => {
            $('.slider-wrap_main .first-number').text(() => {
                if((+$('.clients_main .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.clients_main .slick-current').attr('data-slick-index') + 1);
                } else {
                    return +$('.clients .slick-current').attr('data-slick-index') + 1;
                }
            })
        })
        $('.clients_main .client').mouseleave(() => {
            $('.slider-wrap_main .first-number').text(() => {
                if((+$('.clients_main .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.clients_main .slick-current').attr('data-slick-index') + 1);
                } else {
                    return +$('.clients .slick-current').attr('data-slick-index') + 1;
                }
            })
        })
        $('.clients_main .client').mouseout(() => {
            $('.slider-wrap_main .first-number').text(() => {
                if((+$('.clients_main .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.clients_main .slick-current').attr('data-slick-index') + 1);
                } else {
                    return +$('.clients .slick-current').attr('data-slick-index') + 1;
                }
            })
        })
        $('.slider-wrap_main .first-number').text(() => {
            if((+$('.clients_main .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.clients_main .slick-current').attr('data-slick-index') + 1);
            } else {
                return +$('.clients .slick-current').attr('data-slick-index') + 1;
            }
        })
        $('.slider-wrap_main span').text(() => {
            if($('.clients_main .slick-dots li').length < 10) {
                return '0' + $('.clients_main .slick-dots li').length;
            } else {
                return $('.clients_main .slick-dots li').length;
            }
        })
    }

    if($('.slider-wrap_services-clients .client').length >= 4) {
        $('.clients_servicesPage').slick({
            infinite: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrow: true,
            swipe: false,
            prevArrow: '<button type="button" class="slick-prev slick-prev_main"><img src="images/Arrow-prev.png"></button>',
            nextArrow: '<button type="button" class="slick-next slick-next_main"><img src="images/Arrow-next.png"></button>',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 992,
                settings: {
                    swipe: true,
                    slidesToShow: 2
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  swipe: true,
                  centerPadding: '0px'
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
              
        $('.clients_servicesPage .slick-arrow').click(() => {
            $('.slider-wrap_services-clients .first-number').text(() => {
                if((+$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1);
                } else {
                    return +$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1;
                }
            })
        })
        $('.clients_servicesPage .client').mouseleave(() => {
            $('.slider-wrap_services-clients .first-number').text(() => {
                if((+$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1);
                } else {
                    return +$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1;
                }
            })
        })
        $('.clients_servicesPage .client').mouseout(() => {
            $('.slider-wrap_services-clients .first-number').text(() => {
                if((+$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1) < 10) {
                    return "0" + (+$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1);
                } else {
                    return +$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1;
                }
            })
        })
        $('.slider-wrap_services-clients .first-number').text(() => {
            if((+$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1) < 10) {
                return "0" + (+$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1);
            } else {
                return +$('.slider-wrap_services-clients .slick-current').attr('data-slick-index') + 1;
            }
        })
        $('.slider-wrap_services-clients .number-slider span').text(() => {
            if($('.clients_servicesPage .slick-dots li').length < 10) {
                return '0' + $('.clients_servicesPage .slick-dots li').length;
            } else {
                return $('.clients_servicesPage .slick-dots li').length;
            }
        })
    }
    
});
