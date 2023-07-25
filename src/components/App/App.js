import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'

import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";

import MainApi from '../../utils/MainApi';
import MoviesApi from "../../utils/MoviesApi";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedMovies from "../SavedMovies/SavedMovies";

import Preloader from '../Preloader/Preloader';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [preload, setPreload] = useState(false);



  // Проверка jwt, если приходит then значит в куки он есть
  function handleTokenCheck() {
    MainApi.token()
      .then((user) => {
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   handleTokenCheck();
  // });

  // Если токен есть - получаем данные пользователя
  // useEffect(() => {
  //   if (loggedIn) {
  //     Promise.all([MainApi.getUserInfo()])
  //     .then((values) => {
  //       const [userData] = values;
  //       setCurrentUser(userData);
  //     })
  //     .catch((err) => console.log(err));
  //   }
  // }, [loggedIn]);

  // Сброс ошибок в формах
  const clearError = () => {
    setTimeout(() => setError(""), 10000);
  };

  // Регистрация пользователя
  function userRegistration(data) {
    setPreload(true);
    MainApi.register(data.name, data.email, data.password)
      .then((data) => {
        console.log(data);
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(`${err}`);
        setError(
          err.status === 409
            ? "Пользователь с таким email уже зарегистрирован"
            : "При регистрации пользователя произошла ошибка"
        );
      })
      .finally(() => {
        setPreload(false);
        clearError();
      });
  }

  // Авторизация пользователя
  function userLogin(dataUser) {
    setPreload(true);
    MainApi.login(dataUser.email, dataUser.password)
      .then((data) => {
        if (data) {
          console.log(data);
          setLoggedIn(true);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setPreload(false);
      })
  }

  // Удаление jwt из куки (выход)
  function signOut(){
    navigate("/");
    // setPreload(true);
    // MainApi.signOut()
    // .then(() => {
    //   setLoggedIn(false);
    //   navigate("/");
    // })
    // .catch((err) => console.log(err))
    // .finally(() => {setPreload(false);})
  }

  // Редактирование данных пользователя
  function handleUpdateUser(data) {
    setPreload(true);
    MainApi.updateUserData(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setPreload(false);
      })
  }

  // Получение всех карточек
  function getMovies () {
    MoviesApi.getMovies()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  // useEffect(() => {
  //   getMovies();
  // })

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/signup"
          element={
            //<ProtectedRoute loggedIn={!loggedIn}>
              <Register onRegister={userRegistration} error={error} />
            //</ProtectedRoute>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            //<ProtectedRoute loggedIn={!loggedIn}>
              <Login onLogin={userLogin} />
            //</ProtectedRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            //<ProtectedRoute loggedIn={loggedIn}>
              <Profile loggedIn={loggedIn} signOut={signOut} onUpdateUser={handleUpdateUser}/>
            //</ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            //<ProtectedRoute loggedIn={loggedIn}>
              <Movies location={true} loggedIn={loggedIn} />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            // <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies location={false} loggedIn={loggedIn} />
            // </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Preloader isOpen={preload}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
