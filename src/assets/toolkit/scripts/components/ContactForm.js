export default class ContactForm {

  constructor(contactForm) {
    this._contactForm = contactForm;
    this._contactFormStepOne = this._contactForm.querySelector('.contact-form__step-1');
    this._contactFormStepTwo = this._contactForm.querySelector('.contact-form__step-2');
    this._contactFormMessage = this._contactForm.querySelector('.contact-form__message');
    this._contactFormNextBtn = this._contactForm.querySelector('.contact-form__next-btn');
    this._contactFormPreviousBtn = this._contactForm.querySelector('.contact-form__previous-btn');
    this._contactFormSubmitBtn = this._contactForm.querySelector('.contact-form__submit-btn');
    this._topics = [...this._contactForm.querySelectorAll('.contact-form__topic')];

    this._userTyped = false;

    this._addEventListeners();
  }

  _addEventListeners() {
    this._topics.forEach(topic => {
      topic.addEventListener('click', this._setTopic.bind(this));
    });
    this._contactFormMessage.addEventListener('keypress', () => {
      this._userTyped = true;
    });
    this._contactFormNextBtn.addEventListener('click', this._next.bind(this));
    this._contactFormPreviousBtn.addEventListener('click', this._previous.bind(this));
  }

  _setTopic(e) {
    e.preventDefault();

    const btn = e.currentTarget;

    this._topics.forEach(topic => {
      topic.classList.remove('active');
    });
    btn.classList.add('active');

    if (!this._userTyped) {
      const message = btn.dataset.message;
      this._contactFormMessage.value = message;
    }

    this._previous();
  }

  _next() {
    if (this._contactFormMessage.checkValidity()) {
      this.showStepTwo();
    } else {
      // Trigger browser native validation messages
      this._contactFormSubmitBtn.click();
    }
  }

  _previous() {
    this.showStepOne();
  }


  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  showStepOne() {
    this._contactFormStepOne.classList.remove('hidden');
    this._contactFormStepTwo.classList.add('hidden');
    this._contactFormMessage.focus();
  }

  showStepTwo() {
    this._contactFormStepOne.classList.add('hidden');
    this._contactFormStepTwo.classList.remove('hidden');
  }

}
