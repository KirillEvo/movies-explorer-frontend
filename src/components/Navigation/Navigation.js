import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../OtherComponents/CustomLink/CustomLink";

export default function Navigation({ loggedIn }) {
  const [activeMenu, setActiveMenu] = useState(false);

  const openMenu = () => {
    setActiveMenu(true);
  };

  const closeMenu = () => {
    setActiveMenu(false);
  };

  return (
    <>
      {loggedIn ? (
        <button onClick={openMenu} className="header__burger">
          <span className="header__line"></span>
          <span className="header__line"></span>
          <span className="header__line"></span>
        </button>
      ) : (
        ""
      )}
      {loggedIn ? (
        <div
          className={`header__nav-block ${
            activeMenu ? "header__nav-block_open" : ""
          }`}
        >
          {activeMenu ? (
            <button onClick={closeMenu} className="header__btn-close"></button>
          ) : (
            ""
          )}
          <nav className="header__nav-login">
            <ul className="header__list-login">
              <li className="header__list-item">
                <CustomLink
                  className={
                    "header__login-item_none header__login-item header__login-item"
                  }
                  to={"/"}
                >
                  Главная
                </CustomLink>
              </li>
              <li className="header__list-item">
                <CustomLink
                  className={
                    'header__login-item header__login-item'
                  }
                  to={'/movies'}
                >
                  Фильмы
                </CustomLink>
              </li>
              <li className="header__list-item">
                <CustomLink
                  className={
                    'header__login-item header__login-item'
                  }
                  to={'/saved-movies'}
                >
              Сохранённые фильмы
                </CustomLink>
              </li>
            </ul>
            <Link to="/profile" className="header__login-link">
              Аккаунт <i className="header__login-icon"></i>
            </Link>
          </nav>
        </div>
      ) : (
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <Link to="/signup" className="header__register">
                Регистрация
              </Link>
            </li>
            <li>
              <Link to="/signin" className="header__btn-login">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
