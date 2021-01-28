import './App.scss';
import { useState } from 'react'

function App() {
  const [selectedLanguage, editLanguage] = useState('Русский');
  const [openLanguages, toggleLanguages] = useState(false);
  const [name, editName] = useState('');
  const [email, editEmail] = useState('');
  const [phone, editPhone] = useState('');
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

  return (
    <div className="App">
      <form action="" className="form">
        <div className="form__header">
          <div className="form__title">Регистрация</div>
          <div className="form__note">Уже есть аккаунт? <a href="/">Войти</a></div>
        </div>
        <div className="form__content">
          <label htmlFor="name" className="form__label">Имя</label>
          <input 
            id="name" 
            type="text" 
            className="form__input" 
            placeholder="Введите Ваше имя" 
            value={name}
            onChange={(e) => editName(e.target.value)}
          />
          <label htmlFor="email" className="form__label">Email</label>
          <input 
            id="email" 
            type="text" 
            className="form__input" 
            placeholder="Введите Ваш email"
            value={email}
            onChange={(e) => editEmail(e.target.value)}
          />
          <label htmlFor="phone" className="form__label">Номер телефона</label>
          <input 
            id="phone" 
            type="text" 
            className="form__input" 
            placeholder="Введите номер телефона"
            value={phone}
            onChange={(e) => editPhone(e.target.value)}
          />
          <label htmlFor="language" className="form__label">Язык</label> 
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
                  name="remember"
                  id="accept"
                  checked={accept}
                  onChange={e => setAccept(!accept)}
                  type="checkbox"/>
                  <span className="form__checkmark"></span>
                  Принимаю <a href="/">условия</a> использования
          </label>
          <button 
            type="submit" 
            className="btn btn--disabled" 
            disabled
          >Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
}

export default App;
