

/**
 * @name initSwiper
 * @description initialize Swiper
 */
const initSwiper = () => {
  /**
   *
   */
  const workingSlider = new Swiper('.swiper-container--working', {
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   *
   */
  workingSlider.on('slideChange', function() {
    const activeSlide = workingSlider.slides[workingSlider.activeIndex],
      activeSlideID = $(activeSlide).data('slide-id');

    const graphLine = $('.working__graph-img--' + activeSlideID);

    $('[working-graph-js]').hide();
    graphLine.fadeIn();
  });


  /**
   *
   */
  const saveSlider = new Swiper('.swiper-container--save', {
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  /**
   *
   */
  const wiringSlider = new Swiper('.swiper-container--wiring-0, .swiper-container--wiring-1', {
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  /**
   *
   */
  const controlSlider = new Swiper('.swiper-container--control', {
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
};
