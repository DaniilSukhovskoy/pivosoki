// init Masonry
var elem = document.querySelector('.mansory-grid');

var msnry = new Masonry( '.mansory-grid', {
    itemSelector: '.mansory-card',
    columnWidth: '.one-four',
    horizontalOrder: true,
    percentPosition: true,
  });

  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });