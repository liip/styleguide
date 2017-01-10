import Delegate from 'dom-delegate';

const MIN_HEIGHT = 80;
const MAX_HEIGHT = 160;

export default class Navbar {

  constructor(el, options = {
    mode: 'instant',
  }) {
    this.el = el;
    this.options = options;

    this.logoEl = this.el.querySelector('.logo');
    this.isNegative = this.el.classList.contains('navbar--negative');

    switch (options.mode) {
      case 'window':
        this.threshold = window.innerHeight;
        break;
      default:
        this.threshold = MAX_HEIGHT;
        break;
    }

    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('scroll', this.handleChange.bind(this));
    window.addEventListener('resize', this.handleChange.bind(this));
  }

  handleChange() {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(this.handleScroll.bind(this));
    } else {
      this.handleScroll();
    }
  }

  handleScroll() {
    const scrollY = window.scrollY;
    const animationBase = Math.max(Math.min(1, (scrollY - this.threshold + MAX_HEIGHT) / MIN_HEIGHT), 0);
    const logoScale = 1 - (animationBase / 2);
    const navbarHeight = Math.max(Math.min(MAX_HEIGHT, this.threshold - scrollY), 60);

    if (matchMedia('(min-width: 769px)').matches) {
      this.logoEl.style.transform = `scale(${logoScale})`;
      this.el.style.height = `${navbarHeight}px`;
    } else {
      this.logoEl.removeAttribute('style');
      this.el.removeAttribute('style');
    }

    if (this.threshold - scrollY <= MIN_HEIGHT) {
      this.logoEl.classList.add('logo--shrinked');
    } else {
      this.logoEl.classList.remove('logo--shrinked');
    }

    if (this.threshold - scrollY <= MIN_HEIGHT / 2) {
      if (this.isNegative) {
        this.el.classList.remove('navbar--negative');
      }
      this.el.classList.add('navbar--overlay');
    } else {
      if (this.isNegative) {
        this.el.classList.add('navbar--negative');
      }
      this.el.classList.remove('navbar--overlay');
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
