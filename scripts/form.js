const mail = {
  key: '8jANkID0114nuTOKi',
  serviceId: 'ad3d43a2f8f699dfa7a6137d',
  templateId: '7f70c9646202db6ad5d96693',
};

const formElements = [
  document.querySelector('#contactName'),
  document.querySelector('#contactEmail'),
  document.querySelector('#contactSubject'),
  document.querySelector('#contactMessage'),
];

emailjs.init(mail.key);

async function sendMail(event) {
  event.preventDefault();

  const [name, email, subject, message] = formElements.map(({ value }) => value);
  if (!name || !email || !subject || !message) {
    return;
  }
  
  const templateParams = {
    subject: subject,
    customer: name.toUpperCase(),
    language: language.toUpperCase(),
    customer_email: email,
    message: message
  };
  
  const formLoadingContainer = document.querySelector('.contact__loading');
  const formThankYouContainer = document.querySelector('.contact__thankyou');
  const errElement = document.querySelector('.contact__form_flex-err');

  await fadeOut(errElement);
  await fadeIn(formLoadingContainer, 'block');

  try {
    await emailjs.send(mail.serviceId, mail.templateId, templateParams);
    await fadeIn(formThankYouContainer, 'flex');
  } catch (err) {
    await fadeOut(formLoadingContainer);
    await fadeIn(errElement, 'block');
  }
}

function _resizeTextarea() {
  const textarea = formElements[3];
  const offset = textarea.offsetHeight - textarea.clientHeight;

  textarea.addEventListener('keydown', function ({ target }) {
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + offset + 'px';
  });
}

function _addLabelAnimationInForm() {
  const selectedLabelClass = 'contact__form_row__container-label--selected';
  
  for (const input of formElements) {
    const container = document.querySelector(`#${input.id}Container`);
    const label = document.querySelector(`label[for=${input.id}]`);
    if (!container || !label) continue;

    container.addEventListener('click', () => {
      label.classList.add(selectedLabelClass);
    });

    input.addEventListener('focus', () => {
      label.classList.add(selectedLabelClass);
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        label.classList.remove(selectedLabelClass);
      }
    });
  }
}

(() => {
  _addLabelAnimationInForm();
  _resizeTextarea();
})();
