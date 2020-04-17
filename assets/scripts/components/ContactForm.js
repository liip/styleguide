import Collapse from 'components/Collapse';
import Expanding from 'expanding-textareas';
import { lazySelector } from 'helpers/dom';

export default class ContactForm {
  constructor(contactForm) {
    this._contactForm = lazySelector(contactForm);
    this._stepTwo = this._contactForm.querySelector('.contact-form__step-2');
    this._name = this._contactForm.querySelector('.contact-form__name');
    this._email = this._contactForm.querySelector('.contact-form__email');
    this._phone = this._contactForm.querySelector('.contact-form__phone');
    this._message = this._contactForm.querySelector('.contact-form__message');
    this._fields = [this._name, this._email, this._phone, this._message];
    this._isOpen = false;

    this.collapse = new Collapse(this._stepTwo);
    this.expanding = new Expanding(this._message);

    this._addEventListeners();
  }

  _addEventListeners() {
    this._fields.forEach((field) => {
      field.addEventListener('focus', () => {
        this._isOpen = true;
        this.collapse.show();
      });

      field.addEventListener('blur', () => {
        const data = this._fields.reduce(
          (counter, field) => (counter += field.value.length),
          0
        );

        // Keep the form details open if any field was filled-in
        if (data === 0) {
          this._isOpen = false;
          setTimeout(() => {
            // In case we did not focus another field in-between, hide the details
            if (!this._isOpen) {
              this.collapse.hide();
            }
          }, 100);
        }
      });
    });
  }
}
