import A11yDialog from 'a11y-dialog';
import { lazySelector } from 'helpers/dom';

export default class Dialog {
  constructor(el) {
    this._el = lazySelector(el);
    this._dialog = new A11yDialog(this._el);

    this._dialog.on('show', this._onShow.bind(this));
    this._dialog.on('hide', this._onHide.bind(this));
  }

  _onShow() {
    this._el.classList.add('is-active');
  }

  _onHide() {
    this._el.classList.remove('is-active');
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  show() {
    this._dialog.show();
  }

  hide() {
    this._dialog.hide();
  }

  getElement() {
    return this._el;
  }

  getA11yDialog() {
    return this._dialog;
  }

  destroy() {
    this._dialog.destroy();
  }
}
