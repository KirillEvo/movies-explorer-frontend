import React from "react";
import Logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/hooks/validationForm";
import { Link } from "react-router-dom";
import './Register.css';

export default function Registe(props) {
  const inputValid = useFormWithValidation();
  const { name, email, password } = inputValid.errors;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password } = inputValid.values;
    props.onRegister({
      name: name,
      email: email,
      password: password
    })
    inputValid.resetForm();
  };

  return (
    <section className="sign-form">
      <form className="sign-form__container">
        <div className="sign-form__top">
          <Link to='/'><img className="logotype" src={Logo} alt="Logotype" /></Link>
          <h1 className="sign-form__title">Добро пожаловать!</h1>
        </div>
        <div>
          <label className="sign-form__label" htmlFor="name">
            Имя
            <input
              required
              className="sign-form__input"
              value={inputValid?.values?.name || ""}
              onChange={inputValid.handleChange}
              name="name"
              type="text"
              minLength={2}
              maxLength={30}
            />
            <span className="sign-form__span">{name}</span>
          </label>
          <label className="sign-form__label" htmlFor="email">
            E-mail
            <input
              required
              className="sign-form__input"
              value={inputValid?.values?.email || ""}
              onChange={inputValid.handleChange}
              name="email"
              type="email"
            />
            <span className="sign-form__span">{email}</span>
          </label>
          <label className="sign-form__label" htmlFor="password">
            Пароль
            <input
              required
              className="sign-form__input"
              value={inputValid?.values?.password || ""}
              onChange={inputValid.handleChange}
              name="password"
              type="password"
            />
            <span className="sign-form__span">{password}</span>
          </label>
        </div>
        <span className="sign-form__span sign-form__height">{props.error}</span>
        <button className={`sign-form__btn ${!inputValid.isValid && 'sign-form__btn_disable'}`} onClick={handleSubmit} type="submit" disabled={!inputValid.isValid && 'disabled'}>
          Зарегистрироваться
        </button>
        <div className="sign-form__bottom">
          <p className="sign-form__bottom-text">Уже зарегистрированы?</p>
          <Link className="sign-form__bottom-link" to="/signin">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}
