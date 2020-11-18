
$('.main-instagram').owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
  responsive: {
    0: {
      items: 2,
      nav: true
    },
    600: {
      items: 3,
      nav: true
    },
    1000: {
      items: 5,
      nav: true,
      loop: true
    }
  }
});

// first slider
$('.carousel').carousel({
  interval: 3000
})


// product section

var Container = $('.container');
Container.imagesLoaded(function() {
  var portfolio = $('.special-menu');
  portfolio.on('click', 'button', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
  var $grid = $('.special-list').isotope({
    itemSelector: '.special-grid'
  });
});
