"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  btn.addEventListener("click", function (ev) {
    var elem = ev.currentTarget;

    elem.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });
  });
};

/**
 * @name initHeaderFixed
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

  var countScroll = $(window).scrollTop(),
      headerElement = $('.header');

  if (countScroll > 10) {
    headerElement.addClass("header--fixed");
  } else {
    headerElement.removeClass("header--fixed");
  }
};

/**
 * @name initPreventBehavior
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {
  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSmoothScroll
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
  var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
  var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;


  $(btnName).on("click", function (e) {

    var linkHref = $(e.currentTarget).attr('href'),
        headerHeight = $(".header").outerHeight() || 0,
        topHeightOffset = $(linkHref).offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, animateSpeed);
  });
};

/**
 * @name initSwiper
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {
  /**
   *
   */
  var workingSlider = new Swiper('.swiper-container--working', {
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
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  /**
   *
   */
  workingSlider.on('slideChange', function () {
    var activeSlide = workingSlider.slides[workingSlider.activeIndex],
        activeSlideID = $(activeSlide).data('slide-id');

    var graphLine = $('.working__graph-img--' + activeSlideID);

    $('[working-graph-js]').hide();
    graphLine.fadeIn();
  });

  /**
   *
   */
  var saveSlider = new Swiper('.swiper-container--save', {
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
      prevEl: '.swiper-button-prev'
    }
  });

  /**
   *
   */
  var wiringSlider = new Swiper('.swiper-container--wiring-0, .swiper-container--wiring-1', {
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
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  /**
   *
   */
  var controlSlider = new Swiper('.swiper-container--control', {
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
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  /**
   *
   */
  var typesSlider = new Swiper('.swiper-container--types', {
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
      prevEl: '.swiper-button-prev'
    }
  });
};

/**
 * @name initWebFontLoader
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  // WebFont.load({
  //   google: {
  //     families: [
  //       'Roboto:100,300,400,500,600,700,900'
  //     ]
  //   }
  // });

  var WebFontConfig = {
    custom: {
      families: ['ProximaNova:n3,n4,n5,n6,n7,n8,n9', 'Neris:n3']
    }
  };
};

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {
  initHeaderFixed();
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {
  initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /**
   * =============================================
   * CALLBACK
   * =============================================
   */

  /**
   *
   * @param selector
   */
  var selectReset = function selectReset(selector) {
    if (selector === undefined) {
      var selector = 'select';
    }

    $(selector).each(function () {
      var valOption = $(this).children('option:selected');

      if (valOption.val() !== '0') {
        $(this).prev('span').addClass("is-choose");
      }

      $(this).prev('span').html(valOption.text());
    });
  };
  /**
   *
   * @param selector
   */
  var initSelect = function initSelect(selector) {
    if (selector === undefined) {
      var selector = 'select';
    }

    selectReset(selector);

    $(selector).on('change', function () {
      selectReset(this);
    });
  };

  /**
   *
   */
  var initMap = function initMap() {
    var coordinates = {
      lat: 52.1935326,
      lng: 21.0083038
    },
        iconMarker = '../img/img-marker.png';

    if ($("#map").length) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: coordinates
      });
      var marker = new google.maps.Marker({
        position: coordinates,
        icon: iconMarker,
        map: map
      });
    }
  };

  /**
   *
   */
  var initFocusFormElem = function initFocusFormElem() {
    var formElem = $('[form-focus-js]');

    formElem.on('focus', function (ev) {
      $(ev.currentTarget).closest('.c-form__field').addClass('is-focus');
    });
    formElem.on('blur', function (ev) {
      $(ev.currentTarget).closest('.c-form__field').removeClass('is-focus');
    });
  };

  /**
   *
   */
  var initSelectric = function initSelectric() {
    var langBtn = $("[select-js]");

    langBtn.selectric({
      responsive: true,
      inheritOriginalWidth: false,
      disableOnMobile: false,
      maxHeight: 170,
      onInit: function onInit(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').html($elm.attr('placeholder'));
      },
      onBeforeOpen: function onBeforeOpen(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').data('value', $wrapper.find('.label').html()).html($elm.attr('placeholder'));
      },
      onBeforeClose: function onBeforeClose(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').html($wrapper.find('.label').data('value'));
      },
      onChange: function onChange(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').addClass('is-choose');
      }
    });
  };

  /**
   *
   */
  var initDropDownLevel1 = function initDropDownLevel1() {
    $('[navdrop-js]').on('click', function (ev) {
      var elem = $(ev.currentTarget);

      if (_window.width() < 1200) {
        elem.toggleClass('is-drop');
        elem.siblings('.nav__link-dropdown').slideToggle('300');
      }
    });
    $('[navsubdrop-js]').on('click', function (ev) {
      var elem = $(ev.currentTarget);

      if (_window.width() < 1200) {
        elem.toggleClass('is-subdrop');
        elem.siblings('.nav__link-subdropdown').slideToggle('300');
      }
    });
  };

  /**
   *
   */
  var initProductHeadBtn = function initProductHeadBtn() {
    $('[product-head-js]').on('click', function (ev) {
      $('[product-head-js]').removeClass("is-active");
      $(ev.currentTarget).addClass("is-active");
    });
    $('[product-js]').on('click', function (ev) {
      $('[product-js]').removeClass("is-active");
      $(ev.currentTarget).addClass("is-active");
    });
  };

  /**
   *
   */
  var initCollapseSearch = function initCollapseSearch() {
    var collapseInit = function collapseInit(className, parentName, bodyName) {
      $(className).on('click', function (ev) {
        var elem = $(ev.currentTarget),
            parentElem = elem.closest(parentName),
            bodyElem = parentElem.find(bodyName);

        if (parentElem.hasClass("is-open")) {
          parentElem.removeClass('is-open');
          bodyElem.slideUp(300);
        } else {
          parentElem.addClass('is-open');
          bodyElem.slideDown(300);
        }
      });
    };

    collapseInit('.base__collapse-head', '.base__collapse-wrapper', '.base__collapse-body');
    collapseInit('.product__collapse-head', '.product__collapse-wrapper', '.product__collapse-body');
  };

  /**
   *
   */
  var initBasketDeliveryBox = function initBasketDeliveryBox() {
    $('.basket__delivery-box').on('click', function (ev) {
      var elem = $(ev.currentTarget),
          elemParent = elem.closest('.basket__delivery-box-wrapper');

      elemParent.find('a').removeClass('is-active');
      elem.addClass('is-active');
    });
  };

  /**
   *
   * @name initPedalBoxWorking
   *
   * @description
   */
  var initPedalBoxWorking = function initPedalBoxWorking() {
    $('[working-btn-js]').on('click', function (ev) {
      var elem = $(ev.currentTarget),
          elemId = elem.data('num'),
          elemName = elem.data('name'),
          elemDesc = elem.data('desc'),
          elemText = elem.data('text'),
          prevElemId = $('[working-title-js]').data('num'),
          prevElemName = $('[working-title-js] [working-btnName-js]').text(),
          prevElemDesc = $('[working-title-js] [working-btnDesc-js]').text(),
          prevElemText = $('[working-title-js]').data('text'),
          nodeNameBtn = $('[working-btnName-js]'),
          nodeDescBtn = $('[working-btnDesc-js]'),
          nodeTextContainer = $('[working-text-js]');

      var imageItem = $('.working__box-img--' + elemId),
          graphLine = $('.working__graph-img--' + elemId);

      nodeNameBtn.html(elemName);
      nodeDescBtn.html(elemDesc);
      nodeTextContainer.html(elemText);

      setTimeout(function () {
        elem.html(prevElemName).data('num', prevElemId).data('name', prevElemName).data('desc', prevElemDesc).data('text', prevElemText);

        $('[working-title-js]').data('num', elemId).data('name', elemName).data('desc', elemDesc).data('text', elemText);
      }, 100);

      if (elemId === 3) {
        $('[working-image-js]').hide();
      } else {
        $('[working-image-js]').fadeOut();
        imageItem.fadeIn();
      }

      $('[working-graph-js]').hide();
      graphLine.fadeIn();
    });
  };

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // default
    initWebFontLoader();
    initPreventBehavior();

    // lib
    initHamburger();
    initSwiper();
    initSmoothScroll();

    // callback
    initSelect();
    initMap();
    initFocusFormElem();
    initSelectric();
    initDropDownLevel1();
    initProductHeadBtn();
    initCollapseSearch();
    initBasketDeliveryBox();
    initPedalBoxWorking();
  };
  initJquery();
});