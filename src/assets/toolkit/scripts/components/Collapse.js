/*----------------------------------------*\
  COLLAPSE
  Show/hide an element by collapsing it
  vertically
\*----------------------------------------*/

const DEFAULT_OPTIONS = {
  onShow: () => {},
  onHide: () => {},
  hideOnClick: false,
};

export default class Collapse {

  constructor(el, options) {
    this._collapse = el;
    this._options = Object.assign({}, DEFAULT_OPTIONS, options);
    this._triggers = [...document.querySelectorAll(`[data-toggle="collapse"][data-target="#${this._collapse.id}"]`)];
    this._active = this._collapse.classList.contains('active');

    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this._activate = this._activate.bind(this);
    this._deactivate = this._deactivate.bind(this);

    this._addEventListeners();
  }

  _addEventListeners() {
    this._triggers.forEach(trigger => {
      trigger.addEventListener('click', this.toggle);
    });
  }

  _removeEventListeners() {
    this._triggers.forEach(trigger => {
      trigger.removeEventListener('click', this.toggle);
    });
  }

  _setHeight() {
    this._collapse.classList.add('calculating');
    const height = this._collapse.getBoundingClientRect().height;
    this._collapse.style.width = null;
    const duration = Math.min(1000, Math.max(height * 3, 300));

    this._collapse.classList.remove('calculating');

    setTimeout(() => {
      this._collapse.classList.add('transitioning');
      this._collapse.style.transitionDuration = `${duration}ms`;
      this._collapse.style.height = `${height}px`;
    }, 20);
  }

  /**
   * Switch from fixed height to auto once the transition is done
   * So the collapse can grow later on if necessary.
   * Especially useful for nested collapses.
   */
  _activate() {
    if (!this._active) {
      return;
    }

    this._collapse.style.height = 'auto';
    this._collapse.classList.remove('transitioning');
    this._collapse.classList.add('active');
    this._collapse.removeEventListener('transitionend', this._activate);
  }

  _deactivate() {
    this._collapse.classList.remove('transitioning');
    this._collapse.removeEventListener('transitionend', this._deactivate);
  }


  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  /**
   * Toggle the collapse
   * @param  {Event} e
   */
  toggle(e) {
    if (e) {
      e.preventDefault();
      e.currentTarget.blur();
    }
    this._active ? this.hide() : this.show();
  }

  /**
   * Show the collapse
   */
  show() {
    this._setHeight();

    this._collapse.addEventListener('transitionend', this._activate);

    this._triggers.forEach(trigger => {
      trigger.classList.add('active');
    });

    this._active = true;

    if (this._options.hideOnClick) {
      // Defer listener otherwise it gets called by the current event bubbling
      window.setTimeout(() => {
        document.addEventListener('click', this.hide);
      }, 0);
    }

    this._options.onShow.call(this, this._collapse);
  }

  /**
   * Hide the collapse
   */
  hide() {
    this._collapse.style.height = `${this._collapse.getBoundingClientRect().height}px`;
    setTimeout(() => {
      this._collapse.style.height = null;
    }, 20);
    this._collapse.classList.remove('active');
    this._collapse.classList.add('transitioning');

    this._collapse.addEventListener('transitionend', this._deactivate);

    this._triggers.forEach(trigger => {
      trigger.classList.remove('active');
    });

    this._active = false;

    if (this._options.hideOnClick) {
      document.removeEventListener('click', this.hide);
    }

    this._options.onHide.call(this, this._collapse);
  }

  /**
   * Destroy this instance and stop listening to events
   */
  destroy() {
    this._removeEventListeners();
  }

}
