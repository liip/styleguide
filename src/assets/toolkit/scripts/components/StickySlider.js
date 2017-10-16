import skrollr from 'skrollr';
import stickyfill from 'stickyfilljs';

import media from 'helpers/media';

export default class StickySlider {

  constructor(stickySlider) {
    this._stickySlider = stickySlider;
    this._stickySliderView = this._stickySlider.querySelector('.sticky-slider__view');
    this._stickySliderOverlays = this._stickySlider.querySelector('.sticky-slider__overlays');
    this._stickySliderOverlaysCount = this._stickySliderOverlays.querySelectorAll('.sticky-slider__content').length;
    this._alwaysSticky = this._stickySlider.querySelector('.is-alwayssticky');
    this._desktopSticky = this._stickySlider.querySelector('.is-desktopsticky');

    this._skrollrStart();
    this._addEventListeners();
  }

  _checkStickySupport() {
    const el = document.createElement('a');
    const mStyle = el.style;

    mStyle.cssText = 'position:sticky;position:-webkit-sticky;position:-ms-sticky;';
    return mStyle.position.indexOf('sticky') !== -1;
  }

  _skrollrStart() {
    if (!this._checkStickySupport()) {
      // sticky polyfill for IE for always sticky elements
      stickyfill.add(this._alwaysSticky);

      if (window.innerWidth >= media('md')) {
        stickyfill.add(this._desktopSticky);
      }
    }

    const elH = this._stickySliderView.offsetHeight;

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this._stickySliderView.classList.remove('no-skrollr');
      skrollr.init({
        forcedHeight: false,
        constants: {
          distance: elH / 4,
          distance2: elH / 2,
          distance3: elH / 4 * 3,
        },
      });
    }
  }

  _mobileScrolling() {
    const viewportHeight = window.innerHeight;
    const elOffset = this._stickySliderOverlays.getBoundingClientRect().top - viewportHeight;
    const slide = Math.min(Math.abs(Math.floor(elOffset / viewportHeight)) || 1, this._stickySliderOverlaysCount);

    this._stickySlider.setAttribute('data-current', slide);
  }

  _addEventListeners() {
    window.addEventListener('scroll', this._mobileScrolling.bind(this));
    window.addEventListener('resize', this._skrollrStart.bind(this));
  }

}
