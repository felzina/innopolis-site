import { useState } from 'react';
import './ProductAddReview.css';

const ProductAddReview = () => {
  const [nameValue, setNameValue] = useState(localStorage.getItem('reviewName') || '');
  const [scoreValue, setScoreValue] = useState(localStorage.getItem('reviewScore') || '');

  const [nameValueErrorStr, setNameValueErrorStr] = useState('');
  const [scoreValueErrorStr, setScoreValueErrorStr] = useState('');

  // Сброс информеров ошибок при повторном вводе после неуспешной валидации
  const handleFocusNameValue = () => {
    setNameValue('');
  };

  const handleFocusScoreValue = () => {
    setScoreValueErrorStr('');
  };

  // Изменение локальных стейтов полей (Контролируемый компонент)
  const handleInputNameValue = (e) => {
    localStorage.setItem('reviewName', e.target.value);
    setNameValue(e.target.value);
  };

  const handleInputScoreValue = (e) => {
    localStorage.setItem('reviewScore', e.target.value);
    setScoreValue(e.target.value);
  };

  // Валидация полей, set локальных стейтов для ошибок
  const validateName = () => {
    if (nameValue === '') {
      setNameValueErrorStr('Вы забыли указать имя и фамилию');
      return false;
    } else if (nameValue.length < 3) {
      setNameValueErrorStr('Имя не может быть короче двух символов');
      return false;
    } else {
      setNameValueErrorStr('');
      return true;
    }
  };

  const validateScore = () => {
    if (scoreValue === '') {
      setScoreValueErrorStr('Поле не заполнено: Оценка должна быть от 1 до 5');
      return false;
    } else if (!scoreValue.match(/^\d+$/)) {
      setScoreValueErrorStr('В поле введены буквы: Оценка должна быть от 1 до 5');
      return false;
    } else if (!scoreValue.match(/^[1-5]$/)) {
      setScoreValueErrorStr('Вы ввели цифры больше 5 или меньше 1: Оценка должна быть от 1 до 5');
      return false;
    } else {
      setScoreValueErrorStr('');
      return true;
    }
  };

  // Отправка формы
  const handleSubmitForm = (e) => {
    e.preventDefault();

    if(validateName() && validateScore()) {
      setNameValue('');
      setScoreValue('');

      localStorage.removeItem('reviewName');
      localStorage.removeItem('reviewScore');

      console.log('Форма успешно отправлена');
    }
  };

  return (
    <section className="product-info-subsection addReview">
      <h4 className="addReview__title">Добавить свой отзыв</h4>

      <form className="addReview__form" onSubmit={handleSubmitForm}>      
        <div className="addReview__form-row addReview__form-row-responsive">
          <div className="addReview__form-nameWrapper">
            <input 
              type="text" 
              placeholder="Имя и фамилия" 
              className={nameValueErrorStr ? "addReview__form-field-error" : ""}
              value={nameValue}
              onInput={handleInputNameValue}
              onFocus={handleFocusNameValue}
            />
            {nameValueErrorStr &&
              <div className="addReview__form-error addReview__form-error-active">
                { nameValueErrorStr }
              </div>
            }
          </div>
          <div className="addReview__form-scoreWrapper">
            <input 
              type="text" 
              placeholder="Оценка" 
              className={!nameValueErrorStr && scoreValueErrorStr ? "addReview__form-field-error" : ""}
              value={scoreValue}
              onInput={handleInputScoreValue}
              onFocus={handleFocusScoreValue}
            />
            {!nameValueErrorStr && scoreValueErrorStr &&
              <div className="addReview__form-error addReview__form-error-active">
                { scoreValueErrorStr }
              </div>
            }
          </div>
        </div>
        <div className="addReview__form-row">
          <textarea placeholder="Текст отзыва" name="review_text"></textarea>
        </div>
        <div className="addReview__form-row">
          <input type="submit" value="Отправить отзыв" />
        </div>
      </form>
    </section>
  );
};

export default ProductAddReview;