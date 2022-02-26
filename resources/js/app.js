var elem = document.querySelector('.grid');
var msnry = new Masonry( '.grid', {
    columnWidth: '.col-4-md',
    itemSelector: '.card',
    gutter: 16,
    percentPosition: true,
});