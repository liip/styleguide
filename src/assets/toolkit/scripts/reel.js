import Navigation from 'helpers/navigation';

const DISABLED_BTN_CLASS = 'btn--disabled';

export default class Reel extends Navigation {

  /**
   * @param  {String} el  A selector for a .reel element
   * @param  {Integer} index  The index (from 0) of the element you want to be displayed at the first position
   */
  constructor(el, index) {
    super(el);

    this._bodyNode = this._el.querySelector('.reel__body');
    this._rollNode = this._el.querySelector('.reel__roll');
    this._children = this._el.querySelectorAll('.reel__item');
    this._position = 1;

    this._calcVisibles();
    this.navigate(index);
    this._updateNavigation();
    this._addListeners();
  }

  /**
   * Determinate how many items are visible at the same time
   */
  _calcVisibles() {
    const reelWidth = this._bodyNode.getBoundingClientRect().width;
    const itemWidth = this._children[0].getBoundingClientRect().width;

    if (reelWidth === 0 || itemWidth === 0) return;

    this._visibles = Math.floor(reelWidth / itemWidth);
    this._max = Math.max(1, this._children.length / this._visibles);
  }

  /**
   * Enable/disable navigation buttons according to position
   */
  _updateNavigation() {
    if (this._children.length <= this._visibles) {
      this._nextBtnNode.classList.add(DISABLED_BTN_CLASS);
      this._previousBtnNode.classList.add(DISABLED_BTN_CLASS);
    } else {
      if (this._position === this._max) {
        this._nextBtnNode.classList.add(DISABLED_BTN_CLASS);
      } else {
        this._nextBtnNode.classList.remove(DISABLED_BTN_CLASS);
      }

      if (this._position === 1) {
        this._previousBtnNode.classList.add(DISABLED_BTN_CLASS);
      } else {
        this._previousBtnNode.classList.remove(DISABLED_BTN_CLASS);
      }
    }
  }

  /**
   * Update the roll position
   */
  _updatePosition() {
    const percentage = (this._position - 1) * 100;
    const transform = `translateX(-${percentage}%)`;

    this._rollNode.style.transform = transform;
    this._rollNode.style.setProperty('-webkit-transform', transform);

    this._updateNavigation();
  }

  /**
   * Debounce window resize to fire refresh
   */
  _resize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(this.refresh.bind(this), 250);
  }

  _addListeners() {
    window.addEventListener('resize', this._resize.bind(this));
  }

  _removeListeners() {
    window.removeEventListener('resize', this._resize.bind(this));
  }


  /**
   * PUBLIC
   */

  /**
   * Recalculate everything and update layout/display
   */
  refresh() {
    this._calcVisibles();
    this._position = Math.min(Math.ceil(this._position), this._max);
    this._updatePosition();
  }

  /**
   * Go to the next bunch if we’re not there yet
   */
  next() {
    if (this._position === this._max) return;

    this._position++;
    // Ensure position is not bigger than the maximum
    this._position = Math.min(this._position, this._max);

    this._updatePosition();
  }

  /**
   * Go to the previous bunch if we’re not there yet
   */
  previous() {
    if (this._position === 1) return;

    this._position--;
    if (!Number.isInteger(this._position)) {
      this._position = Math.ceil(this._position);
    }

    this._updatePosition();
  }

  /**
   * Move the reel so the specified index becomes the first element
   * @param  {Integer} index
   */
  navigate(index) {
    if (!index) return;

    const shift = index / this._visibles;
    this._position = Math.min(this._position + shift, this._max);
    this._updatePosition();
  }

}
