import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'

import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";

import AuthApi from "../../utils/authApi";
import Api from '../../utils/api';

import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedMovies from "../SavedMovies/SavedMovies";

import Preloader from '../Preloader/Preloader';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [preload, setPreload] = useState(false);

  function handleTokenCheck() {
    AuthApi.token()
      .then((user) => {
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleTokenCheck();
  });

  useEffect(() => {
    if (loggedIn) {
      Promise.all([Api.getUserInfo()])
      .then((values) => {
        const [userData] = values;
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  const clearError = () => {
    setTimeout(() => setError(""), 10000);
  };

  function userRegistration(data) {
    setPreload(true);
    AuthApi.register(data.name, data.email, data.password)
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

  function userLogin(dataUser) {
    setPreload(true);
    AuthApi.login(dataUser.email, dataUser.password)
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

  function signOut(){
    setPreload(true);
    AuthApi.signOut()
    .then(() => {
      setLoggedIn(false);
      navigate("/", { replace: false });
    })
    .catch((err) => console.log(err))
    .finally(() => {setPreload(false);})
  }

  function handleUpdateUser(data) {
    setPreload(true);
    Api.updateUserData(data)
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/signup"
          element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Register onRegister={userRegistration} error={error} />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Login onLogin={userLogin} />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile loggedIn={loggedIn} signOut={signOut} onUpdateUser={handleUpdateUser}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies loggedIn={loggedIn} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies loggedIn={loggedIn} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Preloader isOpen={preload}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
