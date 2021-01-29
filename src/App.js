import './App.scss';
import { useState } from 'react'

function App() {
  const [selectedLanguage, editLanguage] = useState('Русский');
  const [openLanguages, toggleLanguages] = useState(false);
  const [name, editName] = useState('');
  const [nameError, setNameError] = useState(' ');
  const [email, editEmail] = useState('');
  const [emailError, setEmailError] = useState(' ');
  const [phone, editPhone] = useState('');
  const [phoneError, setPhoneError] = useState(' ');
  const [accept, setAccept] = useState(false);

  const languages = [
    'Русский',
    'Английский',
    'Китайский',
    'Испанский'
  ]

  let selectLanguagesClassname = 'select__languages';
  if (openLanguages) {
    selectLanguagesClassname += ' select__languages--active'
  }

  const changeLanguage = (e) => {
    toggleLanguages(false);
    editLanguage(e.target.innerHTML);
  }

  const validateName = () => {
    const re = new RegExp('[^a-zа-я\\s\\-]+');
    if (re.test(String(name).toLowerCase())) {
      setNameError('поле “Имя” не может содержать цифры и символы кроме пробела и дефиса');
    } else {
      setNameError('');
    }
  }

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError('не корректный email');
    } else {
      setEmailError('');
    }
  }

  const validatePhone = () => {
    // const re = new RegExp('((\\+)?[0-9]{11}[\\(\\)\\-])');
    const re = /^(8|\+7|7)[\\-]?\(?\d{3}\)?[\\-]?[\d]{3}[\\-]?[\d]{2}[\\-]?[\d]{2}$/;
    if (!re.test(String(phone).toLowerCase())) {
      setPhoneError('не корректный номер телефона');
    } else {
      setPhoneError('');
    }
  }

  let disabled = true;

  if (!nameError && !emailError && !phoneError && accept) {
    disabled = false;
  }

  return (
    <div className="App">
      <form action="" className="form">
        <div className="form__header">
          <div className="form__title">Регистрация</div>
          <div className="form__note">Уже есть аккаунт? <a href="/">Войти</a></div>
        </div>
        <div className="form__content">
          <div className="form__block">
            <label htmlFor="name" className="form__label">Имя</label>
            <input 
              id="name" 
              name="name"
              type="text" 
              className="form__input" 
              placeholder="Введите Ваше имя" 
              value={name}
              onChange={(e) => editName(e.target.value)}
              onBlur={validateName}
            />
            <span>{nameError}</span>
          </div>
          <div className="form__block">
            <label htmlFor="email" className="form__label">Email</label>
            <input 
              id="email" 
              name="email"
              type="text" 
              className="form__input" 
              placeholder="Введите Ваш email"
              value={email}
              onChange={(e) => editEmail(e.target.value)}
              onBlur={validateEmail}
            />
            <span>{emailError}</span>
          </div>
          <div className="form__block">
            <label htmlFor="phone" className="form__label">Номер телефона</label>
            <input 
              id="phone" 
              name="phone"
              type="text" 
              className="form__input" 
              placeholder="Введите номер телефона"
              value={phone}
              onChange={(e) => editPhone(e.target.value)}
              onBlur={validatePhone}
            />
            <span>{phoneError}</span>
          </div>
          <label htmlFor="language" className="form__label">Язык</label> 
          <input 
              name="language"
              type="hidden"
              value={selectedLanguage}
            />
          <div className="select">
            <div className="select__selected" onClick={() => toggleLanguages(true)}>{selectedLanguage}</div>
            <div className={selectLanguagesClassname}>
              <ul>
                {languages.map((language) => {
                  return <li onClick={changeLanguage} key={language}>{language}</li>
                })}
              </ul>
            </div>
          </div>
          <label 
              htmlFor="accept" 
              className="form__check">
              <input 
                  name="accept"
                  id="accept"
                  checked={accept}
                  onChange={e => setAccept(!accept)}
                  type="checkbox"/>
                  <span className="form__checkmark"></span>
                  Принимаю <a href="/">условия</a> использования
          </label>
          <button 
            type="submit" 
            className="btn" 
            disabled={disabled}
          >Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
}

export default App;
