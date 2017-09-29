import Collapse from 'components/Collapse';
import Expanding from 'expanding-textareas';

export default class ContactForm {

  constructor(contactForm) {
    this._contactForm = contactForm;
    this._contactFormStepTwo = this._contactForm.querySelector('.contact-form__step-2');
    this._contactFormMessage = this._contactForm.querySelector('.contact-form__message');

    this.collapse = new Collapse(this._contactFormStepTwo);
    this.expanding = new Expanding(this._contactFormMessage);

    this._addEventListeners();
  }

  _addEventListeners() {
    this._contactFormMessage.addEventListener('focus', this.collapse.show);
    this._contactFormMessage.addEventListener('blur', () => {
      if (this._contactFormMessage.value.length === 0) {
        this.collapse.hide();
      }
    });
  }

}
