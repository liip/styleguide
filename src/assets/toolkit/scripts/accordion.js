import Delegate from 'dom-delegate';
import { debounce, offsetTop } from 'helpers/utils';
import scrollTo from 'scroll';
import doc from 'scroll-doc';
import { inOutSine } from 'ease-component';

export default class Accordion {

  constructor(el) {
    this._accordion = el;
    this._list = this._accordion.querySelector('.accordion-list');
    this._elements = [...this._list.querySelectorAll('.accordion__collapse')];
    this._nav = this._accordion.querySelector('.accordion-nav');
    this._current = this._list.querySelector('.accordion-list__item.is-active');

    this._delegate = new Delegate(this._accordion);
    this._debounceResize = this._debounceResize.bind(this);

    this._hardcodeDimensions();
    this._addEventListeners();
  }

  _addEventListeners() {
    this._delegate.on('click', '[data-toggle="accordion"]', this._handleShow.bind(this));
    window.addEventListener('resize', this._debounceResize);
  }

  _removeEventListeners() {
    this._delegate.destroy();
    window.removeEventListener('resize', this._debounceResize);
  }

  _debounceResize() {
    debounce(this._hardcodeDimensions.bind(this));
  }

  /**
   * Hardcode the height one both collapse elements and the whole accordion
   */
  _hardcodeDimensions() {
    const currentHeight = this._current && this._current.getBoundingClientRect().height || 0;
    let tallestHeight = 0;

    // Hardcode the height of each collapse to allow CSS transition
    this._elements.forEach((el) => {
      el.classList.remove('is-ready');
      el.style.height = 'auto';

      const itemHeight = el.closest('.accordion-list__item').getBoundingClientRect().height;
      const collapseHeight = el.getBoundingClientRect().height;

      el.style.height = `${collapseHeight}px`;
      el.classList.add('is-ready');
      tallestHeight = Math.max(tallestHeight, itemHeight);
    });

    // Set a min-height on the container to avoid wiggles during transitions
    this._accordion.style.minHeight = 'auto';
    const minHeight = this._accordion.getBoundingClientRect().height - currentHeight + tallestHeight + 18;
    this._accordion.style.minHeight = `${minHeight}px`;
  }

  _handleShow(e, el) {
    e.preventDefault();

    const target = el.getAttribute('href');

    this._updateList(target);
    this._updateNav(target);
    this._scrollToActive();
  }

  _updateList(target) {
    const targetEl = this._accordion.querySelector(target);
    const currentEl = this._accordion.querySelector('.accordion-list__item.is-active');

    if (currentEl) {
      currentEl.classList.remove('is-active');
    }

    if (targetEl) {
      targetEl.classList.toggle('is-active');
      this._current = targetEl;
      this._accordion.dataset.current = [...this._list.children].indexOf(this._current) + 1;
    }
  }

  _updateNav(target) {
    if (!this._nav) {
      return;
    }

    const targetEl = this._nav.querySelector(`a[href="${target}"]`);
    const currentEl = this._nav.querySelector('.accordion-nav__link.is-active');

    if (currentEl) {
      currentEl.classList.remove('is-active');
    }

    if (targetEl) {
      targetEl.classList.toggle('is-active');
    }
  }

  /**
   * If the top of the panel we just opened is outside the viewport, we scroll the window to show it
   */
  _scrollToActive() {
    // Wait for the animation to complete
    setTimeout(() => {
      const top = this._current.getBoundingClientRect().top;

      if (top <= 60) {
        scrollTo.top(doc(), offsetTop(this._current) - 74, { ease: inOutSine });
      }
    }, 500);
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  destroy() {
    this._removeEventListeners();
    delete this._accordion;
    delete this._list;
    delete this._elements;
    delete this._nav;
    delete this._current;
    delete this._delegate;
    delete this._debounceResize;
  }

}
