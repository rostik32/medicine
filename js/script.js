// menu

const burger = document.querySelector('.burger'),
  menu = document.querySelector('.header-main__menu-col');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  burger.classList.toggle('open');
});


new SlimSelect({
  select: '#citySelect'
});

$(document).ready(function () {

  function slickify() {
    $('.welcome__category-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      accessibility: false,
      waitForAnimate: false,
      draggable: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1870,
          settings: {
            slidesToShow: 2,
          }
        },

        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },

        {
          breakpoint: 991,
          settings: 'unslick'
        },

      ]
    });
  }

  slickify();
  $(window).resize(function () {
    const windowWidth = $(window).width();
    
    if (windowWidth > 991) {
      slickify();
    }
  });


});

