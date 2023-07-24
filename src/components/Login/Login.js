import React from "react";
import Logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/hooks/validationForm";
import { Link } from "react-router-dom";
// import './Login.css';

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
    <section className="sign-form">
      <form className="sign-form__container">
        <div className="sign-form__top">
          <Link to="/">
            <img className="logotype" src={Logo} alt="Logotype" />
          </Link>
          <h1 className="sign-form__title">Рады видеть!</h1>
        </div>
        <div>
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
        <div className="sign-form__height"></div>
        <button className={`sign-form__btn ${!inputValid.isValid && 'sign-form__btn_disable'}`} onClick={handleSubmit} type="submit" disabled={!inputValid.isValid && 'disabled'}>
          Войти
        </button>
        <div className="sign-form__bottom">
          <p className="sign-form__bottom-text">Ещё не зарегистрированы?</p>
          <Link className="sign-form__bottom-link" to="/signup">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}
