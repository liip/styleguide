import Hammer from 'hammerjs';

export default class Navigation {

  /**
   * @param  {String} el  A selector for an element which contains the navigation
   */
  constructor(el) {
    this._el = el;

    this._addNavigationListeners();
  }

  /**
   * Listen for clicks on previous/next buttons
   * Listen for left/right swipe on the container
   */
  _addNavigationListeners() {
    this._nextBtnNode = this._el.querySelector('[data-navigate="next"]');
    this._previousBtnNode = this._el.querySelector('[data-navigate="previous"]');

    if (this._previousBtnNode && this._nextBtnNode) {
      this._nextBtnNode.addEventListener('click', this.next.bind(this));
      this._previousBtnNode.addEventListener('click', this.previous.bind(this));
    }

    // this._touchMananger = new Hammer(this._el, { threshold: 50 });

    this._touchMananger = new Hammer.Manager(this._el, {
      recognizers: [
        [Hammer.Swipe, {
          direction: Hammer.DIRECTION_HORIZONTAL,
          velocity: 0.1,
        }],
      ],
    });
    this._touchMananger.on('swiperight', this.previous.bind(this));
    this._touchMananger.on('swipeleft', this.next.bind(this));
  }

  _removeNavigationListeners() {
    if (this._previousBtnNode && this._nextBtnNode) {
      this._nextBtnNode.removeEventListener('click', this.next.bind(this));
      this._previousBtnNode.removeEventListener('click', this.previous.bind(this));
    }
    this._touchMananger.destroy();
  }

}
