$(document).ready( () => {
    $('.first-map.contacts-info-list__openMaps').click((e) => {
        e.preventDefault();
        $('.SP').toggleClass('active-maps');
    })
    $('.second-map.contacts-info-list__openMaps').click((e) => {
        e.preventDefault();
        $('.Moscow').toggleClass('active-maps');
    })
});