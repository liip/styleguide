import Hammer from 'hammerjs';
import { debounce, operators } from 'helpers/utils';
import { outExpo, inOutSine } from 'ease-component';

const DISABLED_BTN_CLASS = 'btn--disabled';

export default class Reel {

  /**
   * @param  {String} el  A selector for a .reel element
   */
  constructor(el) {
    this._el = el;

    this._bodyNode = this._el.querySelector('.reel__body');
    this._rollNode = this._el.querySelector('.reel__roll');
    this._children = [...this._el.querySelectorAll('.reel__item')];
    this._nextBtnNode = this._el.querySelector('[data-navigate="next"]');
    this._previousBtnNode = this._el.querySelector('[data-navigate="previous"]');
    this._position = 0;
    this._lastPosition = 0;
    this._minPosition = 0;

    this._handleWindowResize = this._handleWindowResize.bind(this);
    this._handlePan = this._handlePan.bind(this);
    this._handlePan = this._handlePan.bind(this);
    this._handlePanEnd = this._handlePanEnd.bind(this);
    this._handleNavigationClick = this._handleNavigationClick.bind(this);
    this._setSizes = this._setSizes.bind(this);
    this._draw = this._draw.bind(this);
    this._stopAnimation = this._stopAnimation.bind(this);

    this._setSizes();
    this._updateNavigation();
    this._addEventListeners();
  }

  _addEventListeners() {
    window.addEventListener('resize', this._handleWindowResize);

    this._touchManager = new Hammer.Manager(this._rollNode, {
      recognizers: [
        [Hammer.Pan, {
          direction: Hammer.DIRECTION_HORIZONTAL,
          threshold: 5,
        }],
      ],
    });
    this._touchManager.on('panstart', this._stopAnimation);
    this._touchManager.on('panright', this._handlePan);
    this._touchManager.on('panleft', this._handlePan);
    this._touchManager.on('panend', this._handlePanEnd);

    this._nextBtnNode.addEventListener('click', this._handleNavigationClick);
    this._previousBtnNode.addEventListener('click', this._handleNavigationClick);
  }

  _removeEventsListeners() {
    window.removeEventListener('resize', this._handleWindowResize);
    this._touchManager.destroy();
  }

  /**
   * On window resize recalculate reel sizes and update navigation accordingly
   */
  _handleWindowResize() {
    debounce(() => {
      this._setSizes();
      this._updateNavigation();
    });
  }

  /**
   * When the user stop panning
   * @param  {Object} e  Event
   */
  _handlePanEnd(e) {
    this._drift(e.velocityX);
  }

  /**
   * While the user pan
   * @param  {Object} e Event
   */
  _handlePan(e) {
    // Do no pan if the whole roll is visible
    if (this._reelWidth === this._rollWidth) {
      return;
    }

    const position = this._position + e.deltaX;
    this._setPosition(position);
  }

  /**
   * When user click navigation buttons
   */
  _handleNavigationClick(e) {
    const operator = e.currentTarget === this._nextBtnNode ? '-' : '+';
    let destination = operators[operator](this._lastPosition, this._reelWidth);
    destination = this._getMinMaxPosition(destination);

    this._startAnimation(destination);
  }

  /**
   * Save some dimensions useful for later calculations
   */
  _setSizes() {
    this._reelWidth = this._bodyNode.getBoundingClientRect().width;
    this._rollWidth = parseInt(this._children.reduce((prev, item) => {
      return prev + item.getBoundingClientRect().width;
    }, 0).toFixed(), 10);
    this._maxPosition = -1 * parseInt((this._rollWidth - this._reelWidth).toFixed(), 10);

    const scopedPosition = this._getMinMaxPosition(this._position);
    if (scopedPosition !== this._position) {
      this._startAnimation(scopedPosition);
    }
  }

  /**
   * Enable/disable navigation buttons according to position
   */
  _updateNavigation(position = this._position) {
    if (position <= this._maxPosition) {
      this._nextBtnNode.classList.add(DISABLED_BTN_CLASS);
    } else {
      this._nextBtnNode.classList.remove(DISABLED_BTN_CLASS);
    }

    if (position >= this._minPosition) {
      this._previousBtnNode.classList.add(DISABLED_BTN_CLASS);
    } else {
      this._previousBtnNode.classList.remove(DISABLED_BTN_CLASS);
    }
  }

  /**
   * Initiate a transition to the given destination
   * @param  {Integer} destination
   * @param  {Integer} duration
   * @param  {Function} easeFn Easing function
   */
  _startAnimation(destination, duration = 700, easeFn = inOutSine) {
    this._updateNavigation(destination);

    this._animation = {
      start: Date.now(),
      startX: this._lastPosition,
      duration,
      easeFn,
      destination,
    };

    this._requestAnimation();
  }

  /**
   * Cancel any ongoing animation and save the last position
   */
  _stopAnimation() {
    this._animation = null;
    this._position = this._lastPosition;
  }

  /**
   * Add momentum to smoothly finish user pan depending on velocity
   * @param  {Integer} velocity
   */
  _drift(velocity) {
    const extra = 300 * velocity;
    const destination = this._getMinMaxPosition(this._lastPosition + extra);
    const duration = 350 * Math.max(1, Math.abs(velocity));

    if (destination === this._lastPosition) {
      this._updateNavigation();
      return;
    }

    this._startAnimation(destination, duration, outExpo);
  }

  /**
   * Animate the reel position as long as an animation is defined
   */
  _requestAnimation() {
    if (this._animation) {
      if (window.requestAnimationFrame) {
        requestAnimationFrame(this._draw);
      } else {
        this._draw();
      }
    }
  }

  /**
   * Calculate and set reel position during animation with easing
   */
  _draw() {
    if (!this._animation) {
      return;
    }

    const { duration, start, startX, destination, easeFn } = this._animation;
    const now = Date.now();

    if (now - start >= duration) {
      this._stopAnimation();
      return;
    }

    const progress = (now - start) / duration;
    const easing = easeFn(progress);
    const position = startX + (destination - startX) * easing;

    this._setPosition(position);
    this._requestAnimation(startX, destination, duration);
  }

  /**
   * Ensure the requested position is not outside the min/max possible range.
   * @param  {Integer} position
   * @return {Integer} The scoped position
   */
  _getMinMaxPosition(position) {
    position = Math.max(this._maxPosition, position);
    position = Math.min(this._minPosition, position);
    position = parseInt(position.toFixed(), 10);

    return position;
  }

  /**
   * Update the reel position and save it
   * @param {Integer} position
   */
  _setPosition(position) {
    position = parseInt(position.toFixed(), 10);
    const transform = `translateX(${position}px)`;

    this._rollNode.style.transform = this._rollNode.style.webkitTransform = transform;
    this._lastPosition = position;
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  destroy() {
    this._removeEventsListeners();
  }

}
