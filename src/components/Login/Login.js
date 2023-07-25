import React from "react";
import Logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/hooks/validationForm";
import { Link } from "react-router-dom";
import './Login.css';

export default function Login(props) {
  const inputValid = useFormWithValidation();
  const { email, password } = inputValid.errors;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = inputValid.values;
    props.onLogin({
      email: email,
      password: password
    })
    inputValid.resetForm();
  };

  return (
    <section className="sign-login">
      <form className="sign-login__container">
        <div className="sign-login__top">
          <Link to="/">
            <img className="logotype" src={Logo} alt="Логотип" />
          </Link>
          <h1 className="sign-login__title">Рады видеть!</h1>
        </div>
        <div className="sign-login__block-input">
          <label className="sign-login__label" htmlFor="email">
            E-mail
            <input
              required
              className="sign-login__input"
              value={inputValid?.values?.email || ""}
              onChange={inputValid.handleChange}
              name="email"
              type="email"
            />
            <span className="sign-login__span">{email}</span>
          </label>
          <label className="sign-login__label" htmlFor="password">
            Пароль
            <input
              required
              className="sign-login__input"
              value={inputValid?.values?.password || ""}
              onChange={inputValid.handleChange}
              name="password"
              type="password"
            />
            <span className="sign-login__span">{password}</span>
          </label>
        </div>
        <span className="sign-login__height"></span>
        <button className={`sign-login__btn ${!inputValid.isValid && 'sign-login__btn_disable'}`} onClick={handleSubmit} type="submit" disabled={!inputValid.isValid && 'disabled'}>
          Войти
        </button>
        <div className="sign-login__bottom">
          <p className="sign-login__bottom-text">Ещё не зарегистрированы?</p>
          <Link className="sign-login__bottom-link" to="/signup">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}
