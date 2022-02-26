// init Masonry
var elem = document.querySelector('.grid');

var msnry = new Masonry( '.grid', {
    itemSelector: '.grid-item',
    columnWidth: '.one-four',
    gutter: 160,
    horizontalOrder: true,
    percentPosition: true,
  });

  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });