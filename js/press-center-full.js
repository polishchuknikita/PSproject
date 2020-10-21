$(document).ready( () => {
    $('.first-child-nav').click((e)=> {
        e.preventDefault();
        $('.articles-page-wrap-full-title').removeClass('active');
        $('.articles-page-wrap-full').removeClass('active');
        $('.news-page-wrap-full-title').addClass('active');
        $('.news-page-wrap-full').addClass('active');
    });
    $('.second-child-nav').click((e)=> {
        e.preventDefault();
        $('.news-page-wrap-full-title').removeClass('active');
        $('.news-page-wrap-full').removeClass('active');
        $('.articles-page-wrap-full-title').addClass('active');
        $('.articles-page-wrap-full').addClass('active');
    });
});