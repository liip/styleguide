import Collapse from 'components/Collapse';
import Expanding from 'expanding-textareas';

export default class ContactForm {

  constructor(contactForm) {
    this._contactForm = contactForm;
    this._contactFormStepTwo = this._contactForm.querySelector('.contact-form__step-2');
    this._contactFormName = this._contactForm.querySelector('.contact-form__name');
    this._contactFormEmail = this._contactForm.querySelector('.contact-form__email');
    this._contactFormPhone = this._contactForm.querySelector('.contact-form__phone');
    this._contactFormMessage = this._contactForm.querySelector('.contact-form__message');
    this._fields = [this._contactFormName, this._contactFormEmail, this._contactFormPhone, this._contactFormMessage];
    this._isOpen = false;

    this.collapse = new Collapse(this._contactFormStepTwo);
    this.expanding = new Expanding(this._contactFormMessage);

    this._addEventListeners();
  }

  _addEventListeners() {
    this._fields.forEach(field => {
      field.addEventListener('focus', () => {
        this._isOpen = true;
        this.collapse.show();
      });

      field.addEventListener('blur', () => {
        const data = this._fields.reduce((counter, field) => {
          return counter += field.value.length;
        }, 0);

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
