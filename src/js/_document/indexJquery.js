

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
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
  const selectReset = (selector) => {
    if (selector === undefined) {
      var selector = 'select';
    }

    $(selector).each(function(){
      var valOption = $(this).children('option:selected');

      if(valOption.val() !== '0') {
        $(this).prev('span').addClass("is-choose");
      }

      $(this).prev('span').html(valOption.text());
    });
  };
  /**
   *
   * @param selector
   */
  const initSelect = (selector) => {
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
  const initMap = () => {
    const coordinates = {
      lat: 52.1935326,
      lng: 21.0083038
    },
      iconMarker = '../img/img-marker.png';

    if($("#map").length) {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: coordinates
      });
      let marker = new google.maps.Marker({
        position: coordinates,
        icon: iconMarker,
        map: map
      });
    }
  };


  /**
   *
   */
  const initFocusFormElem = () => {
    const formElem = $('[form-focus-js]');

    formElem.on('focus', (ev) => {
      $(ev.currentTarget).closest('.c-form__field').addClass('is-focus');
    });
    formElem.on('blur', (ev) => {
      $(ev.currentTarget).closest('.c-form__field').removeClass('is-focus');
    });
  };


  /**
   *
   */
  const initSelectric = () => {
    const langBtn = $("[select-js]");

    langBtn.selectric({
      responsive: true,
      inheritOriginalWidth: false,
      disableOnMobile: false
    });
  };


  /**
   *
   */
  const initDropDownLevel1 = () => {
    $('[navdrop-js]').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      if(_window.width() < 1200) {
        elem.toggleClass('is-drop');
        elem.siblings('.nav__link-dropdown').slideToggle('300');
      }
    });
    $('[navsubdrop-js]').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      if(_window.width() < 1200) {
        elem.toggleClass('is-subdrop');
        elem.siblings('.nav__link-subdropdown').slideToggle('300');
      }
    });
  };


  /**
   *
   */
  const initProductHeadBtn = () => {
    $('[product-head-js]').on('click', (ev) => {
      $('[product-head-js]').removeClass("is-active");
      $(ev.currentTarget).addClass("is-active");
    });
    $('[product-js]').on('click', (ev) => {
      $('[product-js]').removeClass("is-active");
      $(ev.currentTarget).addClass("is-active");
    });
  };


  /**
   *
   */
  const initCollapseSearch = () => {
    const collapseInit = (className, parentName, bodyName) => {
      $(className).on('click', (ev) => {
        const elem = $(ev.currentTarget),
          parentElem = elem.closest(parentName),
          bodyElem = parentElem.find(bodyName);

        if(parentElem.hasClass("is-open")) {
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
  const initBasketDeliveryBox = () => {
    $('.basket__delivery-box').on('click', (ev) => {
      const elem = $(ev.currentTarget),
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
  const initPedalBoxWorking = () => {
    $('[working-btn-js]').on('click', (ev) => {
      const elem = $(ev.currentTarget),
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

      const imageItem = $('.working__box-img--' + elemId),
        graphLine = $('.working__graph-img--' + elemId);

      nodeNameBtn.html(elemName);
      nodeDescBtn.html(elemDesc);
      nodeTextContainer.html(elemText);

      setTimeout(() => {
        elem.html(prevElemName)
          .data('num', prevElemId)
          .data('name', prevElemName)
          .data('desc', prevElemDesc)
          .data('text', prevElemText);

        $('[working-title-js]')
          .data('num', elemId)
          .data('name', elemName)
          .data('desc', elemDesc)
          .data('text', elemText);
      }, 100);

      if(elemId === 3) {
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
  const initJquery = () => {
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

