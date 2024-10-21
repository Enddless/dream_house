let email = '';
let question = '';
let isValidForm = false;
let countdown = 3;

const emailInput = document.getElementById('email');
const questionInput = document.getElementById('question');
const errorMail = document.getElementById('errorMail');
const errorText = document.getElementById('errorText');
const submitButton = document.getElementById('submitButton');
const notification = document.getElementById('notification');
const feedbackForm = document.querySelector('.statistics__feedback-form');

emailInput.addEventListener('input', (e) => {
  email = e.target.value;
  validateForm();
});

questionInput.addEventListener('input', (e) => {
  question = e.target.value;
  validateForm();
});

const validMail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
const validText = (text) => text.length >= 10;

function validateForm() {
  let mailValid = validMail(email);
  let textValid = validText(question);

  errorMail.style.display = mailValid || email === '' ? 'none' : 'block';
  errorMail.innerText = 'Введите корректный email';

  errorText.style.display = textValid || question === '' ? 'none' : 'block';
  errorText.innerText = 'Не менее 10 знаков';

  isValidForm = mailValid && textValid;
  submitButton.disabled = !isValidForm;
}

document.getElementById('statistics__form').addEventListener('submit', (e) => {
  e.preventDefault();
  showSuccessMessage();
  emailInput.value = '';
  questionInput.value = '';
  validateForm();
});

function showSuccessMessage() {
  notification.style.display = 'flex';
  notification.innerHTML = `Спасибо!`;

  const countdownInterval = setInterval(() => {
    if (countdown === 0) {
      clearInterval(countdownInterval);
      notification.style.display = 'none';
    } else {
      notification.innerHTML = `${countdown}`;
      countdown--;
    }
  }, 1000);
}

feedbackForm.addEventListener('mouseleave', () => {
  feedbackForm.classList.add('unHoverForm');
});
