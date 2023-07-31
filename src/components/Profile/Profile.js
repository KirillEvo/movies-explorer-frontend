import React, { useContext, useState, useEffect } from "react";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/hooks/validationForm";

import "./Profile.css";

export default function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const inputValid = useFormWithValidation();
  const { name, email } = inputValid.errors;

  const [editingActivated, setEditingActivated] = useState(false);

  const handleEditing = (evt) => {
    evt.preventDefault();
    setEditingActivated(true);
  };

  useEffect(() => {
    if (currentUser) {
      inputValid.values.name = currentUser.name;
      inputValid.values.email = currentUser.email;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email } = inputValid.values;
    props.onUpdateUser({
      name: name,
      email: email,
    });
    inputValid.resetForm();
    setEditingActivated(false);
  };

  const Validity = (!inputValid.isValid || (currentUser.name === inputValid.values.name && currentUser.email === inputValid.values.email));

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main>
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form className="profile__form">
              <div className="profile__form-block">
                <div className="profile__block-input">
                  <span className="profile__span">Имя</span>
                  <input
                    className="profile__input"
                    minLength="2"
                    maxLength="30"
                    disabled={!editingActivated && "disabled"}
                    placeholder={currentUser.name}
                    value={inputValid?.values?.name || ''}
                    onChange={inputValid.handleChange}
                    type="text"
                    name="name"
                  ></input>
                  <span className="profile__span-error">{name}</span>
                </div>
                <div className="profile__block-input">
                  <span className="profile__span">E-mail</span>
                  <input

                    className="profile__input profile__input_border"
                    disabled={!editingActivated && "disabled"}
                    placeholder={currentUser.email}
                    value={inputValid?.values?.email || ''}
                    onChange={inputValid.handleChange}
                    type="email"
                    name="email"
                    pattern="^\w+@\w+\..+$"
                  ></input>
                  <span className="profile__span-error">{email}</span>
                </div>
              </div>
              <span className="profile__span-props-message">{props.message}</span>
              <span className="profile__span-props-error">{props.error}</span>
              {editingActivated ? (

            <button
              className={`profile__btn-save ${Validity ? 'profile__btn-save_disable' : ''}
              }`}
              onClick={handleSubmit}
              disabled={Validity ? true : false}
            >
              Сохранить
            </button>
              ) : (
                <div className="profile__bottom-block">
                  <button
                    className="profile__bottom-btn"
                    onClick={handleEditing}
                  >
                    Редактировать
                  </button>
                  <button
                    className="profile__bottom-btn profile__bottom-btn_red"
                    onClick={props.signOut}
                  >
                    Выйти из аккаунта
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
