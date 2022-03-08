// init Masonry
var elem = document.querySelector('.mansory-grid');

var msnry;

  imagesLoaded('.mansory-grid').on('progress', function() {
    // layout Masonry after each image loads
    msnry = new Masonry( '.mansory-grid', {
      itemSelector: '.card',
      columnWidth: '.one-three',
      gutter: 16,
      horizontalOrder: true,
      percentPosition: true,
    });
  });