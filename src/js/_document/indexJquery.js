

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

      if(_window.width() < 768) {
        elem.toggleClass('is-drop');
        elem.siblings('.nav__link-dropdown').slideToggle('300');
      }
    });
    $('[navsubdrop-js]').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      if(_window.width() < 768) {
        elem.toggleClass('is-subdrop');
        elem.siblings('.nav__link-subdropdown').slideToggle('300');
      }
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
    // callback
    initSelect();
    initMap();
    initFocusFormElem();
    initSelectric();
    initDropDownLevel1();
  };
  initJquery();
});

