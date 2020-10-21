$(document).ready( () => {
    const operatingTitle = (scroll, dynamic, static) => {
        return 'translateX(' + (static + (scroll * dynamic)) + 'px)'
    }
    const operatingHow = (scroll, dynamic, static) => {
        return (static - (scroll * dynamic));
    }
    const operatingOpacityItem = (scroll, dynamic, static) => {
        return static + ((scroll * dynamic) / 100);
    }
    const operatingTransformItem = (scroll, dynamic, static) => {
        return 'translateX(' + (static + (scroll * dynamic)) + 'px)';
    }
    
        

    if ($(this).width() > 1400) {
        $(window).scroll( () => {
            let scrollPxOperating = $(window).scrollTop();

            let test = scrollPxOperating - 2600;
            let test2 = scrollPxOperating - 3450;
            let test3 = scrollPxOperating - 3550;

            let firstItemOperating = {
                opacity: operatingOpacityItem(test2, 1, 0),
                transform: operatingTransformItem(test2, 0.3, (-30))
            }
            let secondItemOperating = {
                opacity: operatingOpacityItem((test2 - 33.33), 1.5, 0),
                transform: operatingTransformItem((test2 - 33.33), 0.45, (-30))
            }
            let thirdItemOperating = {
                opacity: operatingOpacityItem((test2 - 66.66), 3, 0),
                transform: operatingTransformItem((test2 - 66.66), 0.9, (-30))
            }
            let fourthItemOperating = {
                opacity: operatingOpacityItem(test3, 1, 0),
                transform: operatingTransformItem(test3, 0.3, (-30))
            }
            let fifthItemOperating = {
                opacity: operatingOpacityItem((test3 - 50), 2, 0),
                transform: operatingTransformItem((test3 - 50), 0.6, (-30))
            }


            if (scrollPxOperating < 2500) {
                $('.first-word').css('opacity', '0');
                $('.second-word').css('opacity', '0');
                $('.how-work__bg').css('opacity', '0');
                $('.how-work__info-wrap').css('opacity', '1');
                $('.order-work-list__item_first').css('opacity', '0');
                $('.order-work-list__item_second').css('opacity', '0');
                $('.order-work-list__item_third').css('opacity', '0');
                $('.order-work-list__item_fourth').css('opacity', '0');
                $('.order-work-list__item_fifth').css('opacity', '0');
            }
            if (scrollPxOperating < 3400) {
                $('.order-work-list__item_first').css('opacity', '0');
                $('.order-work-list__item_second').css('opacity', '0');
                $('.order-work-list__item_third').css('opacity', '0');
                $('.order-work-list__item_fourth').css('opacity', '0');
                $('.order-work-list__item_fifth').css('opacity', '0');
            }
            if(scrollPxOperating > 3800) {
                $('.first-word').css('opacity', '1');
                $('.second-word').css('opacity', '1');
                $('.how-work__bg').css('opacity', '1');
                $('.how-work__info-wrap').css('opacity', '1');
                $('.first-word').css('transform', 'translateX(0px)');
                $('.second-word').css('transform', 'translateX(0px)');
                $('.how-work__bg').css('transform', 'translateX(-17px)');
                $('.order-work-list__item_first').css('transform', 'translateX(0px)');
                $('.order-work-list__item_first').css('opacity', '1');
                $('.order-work-list__item_second').css('transform', 'translateX(0px)');
                $('.order-work-list__item_second').css('opacity', '1');
                $('.order-work-list__item_third').css('transform', 'translateX(0px)');
                $('.order-work-list__item_third').css('opacity', '1');
                $('.order-work-list__item_fourth').css('transform', 'translateX(0px)');
                $('.order-work-list__item_fourth').css('opacity', '1');
                $('.order-work-list__item_fifth').css('transform', 'translateX(0px)');
                $('.order-work-list__item_fifth').css('opacity', '1');
            }

            if(scrollPxOperating > 2600 && scrollPxOperating <= 3650) {
                if(scrollPxOperating < 3250) {
                    $('.first-word').css('transform', operatingTitle(test, 1.077, -700));
                    $('.first-word').css('opacity', '1');
                }
                if(scrollPxOperating < 3400) {
                    $('.second-word').css('transform', operatingTitle(test, -0.875, 700));
                    $('.second-word').css('opacity', '1');
                }
                if(scrollPxOperating < 3500) {
                    $('.how-work__bg').css('transform', operatingTitle(test, 1.3388, -1205));
                    $('.how-work__bg').css('opacity', '1');
                }
                if (scrollPxOperating > 3450) {
                    if (scrollPxOperating <= 3550) {
                        $('.order-work-list__item_first').css(firstItemOperating);
                        $('.order-work-list__item_second').css(secondItemOperating);
                        $('.order-work-list__item_third').css(thirdItemOperating);
                    }
                    if (scrollPxOperating > 3550) {
                        $('.order-work-list__item_fourth').css(fourthItemOperating);
                        $('.order-work-list__item_fifth').css(fifthItemOperating);
                    }
                } 
            }
        });
    }
    if ($(this).width() >= 1280 && $(this).width() <= 1400 ) {
        $(window).scroll( () => {
            let scrollPxOperatingMob = $(window).scrollTop();

            if (scrollPxOperatingMob < 2100) {
                $('.first-word').css('opacity', '0');
                $('.second-word').css('opacity', '0');
                $('.how-work__bg').css('opacity', '0');
                $('.how-work__info-wrap').css('opacity', '1');
                $('.order-work-list__item_first').css('opacity', '0');
                $('.order-work-list__item_second').css('opacity', '0');
                $('.order-work-list__item_third').css('opacity', '0');
                $('.order-work-list__item_fourth').css('opacity', '0');
                $('.order-work-list__item_fifth').css('opacity', '0');
            }
            if (scrollPxOperatingMob < 3600) {
                $('.how-work__bg').css('transition', 'all .0s ease');
            }
            if(scrollPxOperatingMob > 3650) {
                $('.first-word').css('opacity', '1');
                $('.second-word').css('opacity', '1');
                $('.how-work__bg').css('opacity', '1');
                $('.how-work__info-wrap').css('opacity', '1');
                $('.first-word').css('transform', 'translateX(-74px)');
                $('.second-word').css('transform', 'translateX(-170px)');
                $('.how-work__bg').css('transform', 'translateX(-30px)');
                $('.how-work__bg').css('transition', 'all .4s ease');
                $('.order-work-list__item_first').css('transform', 'translateX(0px)');
                $('.order-work-list__item_first').css('opacity', '1');
                $('.order-work-list__item_second').css('transform', 'translateX(0px)');
                $('.order-work-list__item_second').css('opacity', '1');
                $('.order-work-list__item_third').css('transform', 'translateX(0px)');
                $('.order-work-list__item_third').css('opacity', '1');
                $('.order-work-list__item_fourth').css('transform', 'translateX(0px)');
                $('.order-work-list__item_fourth').css('opacity', '1');
                $('.order-work-list__item_fifth').css('transform', 'translateX(0px)');
                $('.order-work-list__item_fifth').css('opacity', '1');
            }

            if(scrollPxOperatingMob > 2450 && scrollPxOperatingMob <= 3350) {
                if (scrollPxOperatingMob <= 2850) {
                    $('.first-word').css('transform', operatingTitle((scrollPxOperatingMob - 2450), 1.75, -770));
                    $('.first-word').css('opacity', '1');
                }
                $('.second-word').css('transform', operatingTitle((scrollPxOperatingMob - 2450), -0.744, 500));
                $('.second-word').css('opacity', '1');
            }
            if(scrollPxOperatingMob > 2850 && scrollPxOperatingMob <= 3400) {
                $('.how-work__bg').css('transform', operatingTitle((scrollPxOperatingMob - 2850), 1.7636, -1000));
                $('.how-work__bg').css('opacity', '1');
            }
            if(scrollPxOperatingMob > 3100 && scrollPxOperatingMob <= 3600) {
                $('.how-work__details').css('margin-right', '20px');
                let firstItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3100), 0.4, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3100), 0.12, (-30))
                }
                let secondItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3183), 0.5, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3183), 0.1796, (-30))
                }
                let thirdItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3266), 1.1, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3266), 0.357, (-30))
                }
                let fourthItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3400), 0.5, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3400), 0.15, (-30))
                }
                let fifthItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3500), 1, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3500), 0.3, (-30))
                }
                if (scrollPxOperatingMob <= 3350) {
                    $('.order-work-list__item_first').css(firstItemOperatingMob);
                    $('.order-work-list__item_second').css(secondItemOperatingMob);
                    $('.order-work-list__item_third').css(thirdItemOperatingMob);
                }
                if (scrollPxOperatingMob > 3400) {
                    $('.order-work-list__item_fourth').css(fourthItemOperatingMob);
                    $('.order-work-list__item_fifth').css(fifthItemOperatingMob);
                }
            }
            if(scrollPxOperatingMob < 3000) {
                $('.order-work-list__item_first').css('opacity', '0');
                $('.order-work-list__item_second').css('opacity', '0');
                $('.order-work-list__item_third').css('opacity', '0');
                $('.order-work-list__item_fourth').css('opacity', '0');
                $('.order-work-list__item_fifth').css('opacity', '0');
            }
        })
    }
    if ($(this).width() >= 1200 && ($(this).width() < 1280)) {
        $(window).scroll( () => {
            let scrollPxOperatingMob = $(window).scrollTop();

            if(scrollPxOperatingMob < 3200) {
                $('.how-work__bg').css('opacity', '0');
            }
            if(scrollPxOperatingMob > 3600) {
                $('.how-work__bg').css('transform', 'translateX(-100px)');
            }

            if(scrollPxOperatingMob > 2650 && scrollPxOperatingMob <= 3100) {
                $('.first-word').css('transform', operatingTitle((scrollPxOperatingMob - 2650), 1.55, -770));
                $('.second-word').css('transform', operatingTitle((scrollPxOperatingMob - 2650), -1.55, 500));
            }
            if(scrollPxOperatingMob > 3200 && scrollPxOperatingMob <= 3600) {
                $('.how-work__bg').css('transform', operatingTitle((scrollPxOperatingMob - 3200), 1, -500));
                $('.how-work__bg').css('opacity', '1');
            }
            if(scrollPxOperatingMob > 3500 && scrollPxOperatingMob <= 3750) {
                $('.how-work__details').css('margin-right', '20px');
                let firstItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3500), 0.6, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3500), 0.2, (-30))
                }
                let secondItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3550), 1, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3550), 0.3, (-30))
                }
                let thirdItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3600), 2, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3600), 0.6, (-30))
                }
                let fourthItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3650), 1, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3650), 0.3, (-30))
                }
                let fifthItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3700), 2, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3700), 0.6, (-30))
                }
                if (scrollPxOperatingMob <= 3650) {
                    $('.order-work-list__item_first').css(firstItemOperatingMob);
                    $('.order-work-list__item_second').css(secondItemOperatingMob);
                    $('.order-work-list__item_third').css(thirdItemOperatingMob);
                }
                if (scrollPxOperatingMob > 3650) {
                    $('.order-work-list__item_fourth').css(fourthItemOperatingMob);
                    $('.order-work-list__item_fifth').css(fifthItemOperatingMob);
                }
            }
            if(scrollPxOperatingMob < 3550) {
                $('.order-work-list__item_first').css('opacity', '0');
                $('.order-work-list__item_second').css('opacity', '0');
                $('.order-work-list__item_third').css('opacity', '0');
                $('.order-work-list__item_fourth').css('opacity', '0');
                $('.order-work-list__item_fifth').css('opacity', '0');
            }
        })
    }
    if ($(this).width() >= 992 && $(this).width() < 1200 ) {
        $(window).scroll( () => {
            let scrollPxOperatingMob = $(window).scrollTop();
            console.log(scrollPxOperatingMob)

            if(scrollPxOperatingMob < 3100) {
                $('.how-work__bg').css('opacity', '0');

            }
            if(scrollPxOperatingMob > 2650 && scrollPxOperatingMob <= 3300) {
                $('.first-word').css('transform', operatingTitle((scrollPxOperatingMob - 2650), 1.046, -770));
                $('.second-word').css('transform', operatingTitle((scrollPxOperatingMob - 2650), -1.292, 770));
            }
            if(scrollPxOperatingMob > 3150 && scrollPxOperatingMob <= 3600) {
                $('.how-work__bg').css('transform', operatingTitle((scrollPxOperatingMob - 3150), 2.422, -1000));
                $('.how-work__bg').css('opacity', '1');
            }
            if(scrollPxOperatingMob > 3530 && scrollPxOperatingMob <= 4030) {
                let firstItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3530), 0.66, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3530), 0.2, (-30))
                }
                let secondItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3530), 0.66, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3530), 0.2, (-30))
                }
                let thirdItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3530), 0.66, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3530), 0.2, (-30))
                }
                let fourthItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3730), 0.3, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3730), 0.1, (-30))
                }
                let fifthItemOperatingMob = {
                    opacity: operatingOpacityItem((scrollPxOperatingMob - 3730), 0.3, 0),
                    transform: operatingTransformItem((scrollPxOperatingMob - 3730), 0.1, (-30))
                }
                if (scrollPxOperatingMob <= 3680) {
                    $('.order-work-list__item_first').css(firstItemOperatingMob);
                    $('.order-work-list__item_second').css(secondItemOperatingMob);
                    $('.order-work-list__item_third').css(thirdItemOperatingMob);
                }
                if (scrollPxOperatingMob > 3730) {
                    $('.order-work-list__item_fourth').css(fourthItemOperatingMob);
                    $('.order-work-list__item_fifth').css(fifthItemOperatingMob);
                }
            }
            if(scrollPxOperatingMob < 3300) {
                $('.order-work-list__item_first').css('opacity', '0');
                $('.order-work-list__item_second').css('opacity', '0');
                $('.order-work-list__item_third').css('opacity', '0');
                $('.order-work-list__item_fourth').css('opacity', '0');
                $('.order-work-list__item_fifth').css('opacity', '0');
            }
        })
    }
    
    if ($(this).width() >= 1400 && ($(this).width() <= 1700)) {
        $(window).scroll( () => {
            let scrollPxOperating = $(window).scrollTop();
            if(scrollPxOperating > 2500 && scrollPxOperating <= 3800) {
                if(scrollPxOperating < 3500) {
                    $('.how-work__bg').css('transform', operatingTitle((scrollPxOperating - 2500), 1.2048, -1205));
                    $('.how-work__info').css('opacity', '1');
                    $('.how-work__info-wrap').css('opacity', '1');
                }
            }
        });
    }
})

