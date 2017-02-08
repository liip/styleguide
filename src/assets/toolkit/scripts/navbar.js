import Delegate from 'dom-delegate';
import { getDocumentScrollTop } from 'helpers/utils';
import media from 'helpers/media';

const DESKTOP_MIN_HEIGHT = 80;
const DESKTOP_MAX_HEIGHT = 160;
const MOBILE_HEIGHT = 60;

export default class Navbar {

  constructor(el, options = {
    mode: 'instant',
  }) {
    this._el = el;
    this._options = options;

    this._logoEl = this._el.querySelector('.logo');
    this._isNegative = this._el.classList.contains('navbar--negative');

    this._handleChange = this._handleChange.bind(this);
    this._handleScroll = this._handleScroll.bind(this);
    this._handleWindowResize = this._handleWindowResize.bind(this);

    this._setSizes();
    this._addEventListeners();
  }

  _addEventListeners() {
    window.addEventListener('scroll', this._handleChange);
    window.addEventListener('resize', this._handleWindowResize);
  }

  _removeEventListeners() {
    window.removeEventListener('scroll', this._handleChange);
    window.removeEventListener('resize', this._handleWindowResize);
  }

  _handleChange() {
    if (window.requestAnimationFrame) {
      requestAnimationFrame(this._handleScroll);
    } else {
      this._handleScroll();
    }
  }

  _handleWindowResize() {
    this._setSizes();
    this._handleChange();
  }

  _handleScroll() {
    const scrollY = getDocumentScrollTop();
    const animationBase = Math.max(Math.min(1, (scrollY - this._threshold + this._maxHeight) / this._minHeight), 0);
    const logoScale = 1 - (animationBase / 2);
    const navbarHeight = Math.max(Math.min(this._maxHeight, this._threshold - scrollY), 60);

    if (media('md')) {
      this._logoEl.style.transform = `scale(${logoScale})`;
      this._el.style.height = `${navbarHeight}px`;
    } else {
      this._logoEl.removeAttribute('style');
      this._el.removeAttribute('style');
    }

    if (this._threshold - scrollY <= this._minHeight) {
      this._logoEl.classList.add('logo--shrinked');
    } else {
      this._logoEl.classList.remove('logo--shrinked');
    }

    if (this._threshold - scrollY <= this._minHeight / 2) {
      if (this._isNegative) {
        this._el.classList.remove('navbar--negative');
      }
      this._el.classList.add('navbar--overlay');
    } else {
      if (this._isNegative) {
        this._el.classList.add('navbar--negative');
      }
      this._el.classList.remove('navbar--overlay');
    }
  }

  _setSizes() {
    if (media('md')) {
      this._minHeight = DESKTOP_MIN_HEIGHT;
      this._maxHeight = DESKTOP_MAX_HEIGHT;
    } else {
      this._minHeight = MOBILE_HEIGHT;
      this._maxHeight = MOBILE_HEIGHT;
    }

    switch (this._options.mode) {
      case 'window':
        this._threshold = window.innerHeight;
        break;
      default:
        this._threshold = this._maxHeight;
        break;
    }
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  destroy() {
    this._removeEventListeners();
  }

}

/**
 * Automatically handle toggle for all navbars
 */
document.addEventListener('DOMContentLoaded', () => {
  new Delegate(document).on('click', '.navbar__toggle', (e, el) => {
    const navbar = el.closest('.navbar');
    navbar.classList.toggle('navbar--expanded');
  });
});
