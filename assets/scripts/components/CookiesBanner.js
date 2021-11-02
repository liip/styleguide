import { lazySelector } from '../helpers/dom';
import Dialog from './Dialog';

export default class CookiesBanner {
  constructor(el, options = {}) {
    this._el = lazySelector(el);
    this._options = options;
    this._acceptAllBtn = this._el.querySelector(
      '#cookies-banner-accept-all-btn'
    );
    this._declineAllBtn = this._el.querySelector(
      '#cookies-banner-decline-all-btn'
    );

    this._addEventsListeners();

    if (this._options.settingsDialog) {
      this._initDialog();
    }
  }

  _addEventsListeners() {
    this._acceptAllBtn.addEventListener(
      'click',
      this._handleAcceptAll.bind(this)
    );
    this._declineAllBtn.addEventListener(
      'click',
      this._handleDeclineAll.bind(this)
    );
  }

  _initDialog() {
    this._dialog = new Dialog(this._options.settingsDialog);
    this._dialog.getA11yDialog().on('show', () => {
      this.hide();
    });

    const dialogNode = this._dialog.getElement();

    this._checkboxes = Array.from(
      dialogNode.querySelectorAll(
        '.cookies-settings-toggle input[type="checkbox"]'
      )
    );
    this._allCheckbox = dialogNode.querySelector(
      '#cookies-settings-toggle-all'
    );

    this._checkboxes.forEach((toggle) => {
      toggle.addEventListener('change', this._toggleOne.bind(this));
    });

    if (this._allCheckbox) {
      this._allCheckbox.addEventListener('change', this._toggleAll.bind(this));
    }
  }

  _getAmountOfTogglesEnabled() {
    return this._checkboxes.reduce((total, toggle) => {
      return toggle.checked ? total + 1 : total;
    }, 0);
  }

  _toggleOne(e) {
    const { name, checked } = e.target;

    if (this._getAmountOfTogglesEnabled() === 0) {
      this._allCheckbox.indeterminate = false;
      this._allCheckbox.checked = false;
    } else if (this._getAmountOfTogglesEnabled() === this._checkboxes.length) {
      this._allCheckbox.indeterminate = false;
      this._allCheckbox.checked = true;
    } else {
      this._allCheckbox.indeterminate = true;
      this._allCheckbox.checked = false;
    }

    if (typeof this._options.onToggle === 'function') {
      this._options.onToggle(name, checked, this.getValues());
    }
  }

  _toggleAll(e) {
    const checked = e.target.checked;
    this._setAllCheckboxesStatus(checked);
    if (typeof this._options.onToggleAll === 'function') {
      this._options.onToggleAll(checked, this.getValues());
    }
  }

  _handleAcceptAll() {
    this.hide();
    this._setAllCheckboxesStatus(true);
    if (typeof this._options.onAcceptAll === 'function') {
      this._options.onAcceptAll(this.getValues());
    }
  }

  _handleDeclineAll() {
    this.hide();
    this._setAllCheckboxesStatus(false);
    if (typeof this._options.onDeclineAll === 'function') {
      this._options.onDeclineAll(this.getValues());
    }
  }

  _setAllCheckboxesStatus(checked) {
    this._checkboxes.forEach((toggle) => {
      toggle.checked = checked;
    });
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  getValues() {
    const values = {};
    this._checkboxes.forEach((toggle) => {
      values[toggle.name] = toggle.checked;
    });
    return values;
  }

  show() {
    this._el.classList.remove('hidden');
  }

  hide() {
    this._el.classList.add('hidden');
  }
}
