$(document).ready( () => {
    if ($(this).width() <= 575) {
        if($('.company-history-list .company-history-list__item').length >= 1) {
            $('.company-history-list').slick({
                infinite: false,
                dots: false,
                arrow: true,
                swipe: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick_company slick-prev slick-opacity"><img src="images/Arrow-prev.png"></button>',
                nextArrow: '<button type="button" class="slick_company slick-next slick-opacity"><img src="images/Arrow-next.png"></button>'
            })
        }
    }
});