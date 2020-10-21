$(document).ready( () => {
    $('.burger__btn').click(() => {
        $('.burger__btn').toggleClass('active-burger');
        $('.header .menu').toggleClass('active-burger');
        $('.header .network-header').toggleClass('active-burger');
    })
    $('.burger__btn').on('click touchstart', () => {
        $('.burger__btn').toggleClass('active-burger');
        $('.header .menu').toggleClass('active-burger');
        $('.header .network-header').toggleClass('active-burger');
    })
});