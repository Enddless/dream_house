import css from './styles.module.scss';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { validMail, validText } from '../../services/validate';
import classNames from 'classnames';

function FeedbackForm() {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [errorMail, setErrorMail] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [count, setCount] = useState('');
  const [unhoverEffect, setUnhoverEffect] = useState(false);
  useEffect(() => {
    const isValidateMail = validMail(email);
    const isValidateText = validText(question);
    if (!isValidateMail && email !== '') {
      setErrorMail('Введите корректный email');
    } else {
      setErrorMail('');
    }
    if (!isValidateText && question !== '') {
      setErrorText('Не менее 10 знаков');
    } else {
      setErrorText('');
    }
    if (isValidateMail && isValidateText) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [email, question]);
  const submitForm = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    let countdown = 3;
    const countdownInterval = setInterval(() => {
      setCount(countdown);
      if (countdown === 0) {
        clearInterval(countdownInterval);
        setShowSuccess(false);
      }
      countdown--;
    }, 1000);
    setEmail('');
    setQuestion('');
    setCount('');
  };
  const classNamesList = classNames(css.feedback, {
    [css.unHovereffect]: unhoverEffect
  });
  return (
    <aside className={classNamesList} onMouseLeave={() => setUnhoverEffect(true)}>
      {showSuccess ? (
        <div className={css.notification}>
          {count && count !== '' && (
            <div className={css.circle}>
              <p className={css.count}> {count}</p>
            </div>
          )}
          <p className={css.atentionText}>
            Мы получили Ваше сообщение. Ответ направим на указанную почту
          </p>
        </div>
      ) : (
        <form onSubmit={submitForm}>
          <fieldset>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your mail'
              className={errorMail && errorMail !== '' ? `${css.errorInput}` : ''}
            />
            {errorMail && errorMail !== '' && (
              <span className={css.errorMessage}>{errorMail}</span>
            )}
          </fieldset>

          <fieldset>
            <input
              type='text'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder='Your question'
              className={errorText && errorText !== '' ? `${css.errorInput}` : ''}
            />
            {errorText && errorText !== '' && (
              <span className={css.errorMessage}>{errorText}</span>
            )}
          </fieldset>

          <div className={css.buttonContainer}>
            <button
              title='Заполните поля'
              className={css.discuss}
              disabled={!isValidForm}>
              discuss a project
            </button>
            <svg width='121' height='23' viewBox='0 0 121 23'>
              <use xlinkHref={`${sprite}#arrowDiscuss`}></use>
            </svg>
          </div>
        </form>
      )}
    </aside>
  );
}

export default FeedbackForm;
