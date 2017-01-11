import Delegate from 'dom-delegate';

const MIN_HEIGHT = 80;
const MAX_HEIGHT = 160;

export default class Navbar {

  constructor(el, options = {
    mode: 'instant',
  }) {
    this._el = el;
    this._options = options;

    this._logoEl = this._el.querySelector('.logo');
    this._isNegative = this._el.classList.contains('navbar--negative');

    switch (this._options.mode) {
      case 'window':
        this._threshold = window.innerHeight;
        break;
      default:
        this._threshold = MAX_HEIGHT;
        break;
    }

    this._addEventListeners();
  }

  _addEventListeners() {
    window.addEventListener('scroll', this._handleChange.bind(this));
    window.addEventListener('resize', this._handleChange.bind(this));
  }

  _handleChange() {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(this._handleScroll.bind(this));
    } else {
      this._handleScroll();
    }
  }

  _handleScroll() {
    const scrollY = window.scrollY;
    const animationBase = Math.max(Math.min(1, (scrollY - this._threshold + MAX_HEIGHT) / MIN_HEIGHT), 0);
    const logoScale = 1 - (animationBase / 2);
    const navbarHeight = Math.max(Math.min(MAX_HEIGHT, this._threshold - scrollY), 60);

    if (matchMedia('(min-width: 769px)').matches) {
      this._logoEl.style.transform = `scale(${logoScale})`;
      this._el.style.height = `${navbarHeight}px`;
    } else {
      this._logoEl.removeAttribute('style');
      this._el.removeAttribute('style');
    }

    if (this._threshold - scrollY <= MIN_HEIGHT) {
      this._logoEl.classList.add('logo--shrinked');
    } else {
      this._logoEl.classList.remove('logo--shrinked');
    }

    if (this._threshold - scrollY <= MIN_HEIGHT / 2) {
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
