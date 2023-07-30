import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";

import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedMovies from "../SavedMovies/SavedMovies";

import Preloader from "../Preloader/Preloader";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
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

  useEffect(() => {
    handleTokenCheck();
  }, [loggedIn]);

  // Если токен есть - получаем данные пользователя
  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  // Сброс ошибок в формах
  const clearError = () => {
    setTimeout(() => setError(""), 10000);
  };

  // Регистрация пользователя
  function userRegistration(data) {
    setPreload(true);
    MainApi.register(data.name, data.email, data.password)
      .then((data) => {
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
          setLoggedIn(true);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setPreload(false);
      });
  }

  // Удаление jwt из куки (выход)
  function signOut() {
    // navigate("/");
    setPreload(true);
    MainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        navigate("/");
        localStorage.clear();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setPreload(false);
      });
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
      });
  }

  // ФУНКЦИОНАЛЬНОСТЬ ФИЛЬМОВ
  //const [movies, setMovies] = useState([]); // Фильмы
  const [queryMovies, setQueryMovies] = useState([]); // Фильмы полученные из запроса
  const [shortMovies, setShortMovies] = useState([]); // Короткие фильмы
  const [isChecked, setChecked] = useState(false); // Состояние чекбокса
  const [queryUser, setQueryUser] = useState(""); // Текст запроса
  const [errorText, setErrorText] = useState(''); //

  // Фильтрация по продолжительности фильма
  function filterShortMovies(movies) {
    return movies.filter((movie) => movie.duration < 40);
  }

  // Фильтрация фильмов
  function filterMovies(movies, query) {
    setQueryUser(query);
    const moviesQuery = movies.filter((movie) => {
      const movieRU = String(movie.nameRU).toLowerCase().trim();
      const movieEN = String(movie.nameEN).toLowerCase().trim();
      const movieQuery = query.toLowerCase().trim();
      return (
        movieRU.indexOf(movieQuery) !== -1 || movieEN.indexOf(movieQuery) !== -1
      );
    });
    if (moviesQuery.length === 0) {
      setErrorText('Ничего не найдено')
    } else {
      setErrorText('');
    }
    setQueryMovies(moviesQuery);
    setShortMovies(filterShortMovies(moviesQuery));
    localStorage.setItem(
      `${currentUser.email} - moviesQuery`,
      JSON.stringify(moviesQuery)
    );
    localStorage.setItem(
      `${currentUser.email} - shortMovies`,
      JSON.stringify(filterShortMovies(moviesQuery))
    );
  }

  // Поиск фильмов
  function handleSearchSubmit(inputValue) {
    localStorage.setItem(`${currentUser.email} - queryUser`, inputValue);
    MoviesApi.getMovies()
      .then((movies) => {
        //setMovies(movies);
        filterMovies(movies, inputValue);
        localStorage.setItem("movies", JSON.stringify(movies));
        setPreload(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => setPreload(false));
  }

  // Переключатель состояния чекбокса короткометражек
  function handleChecked(value) {
    setChecked(value);
    localStorage.setItem(`${currentUser.email} - checkbox`, value);
  }

  // Монтирование фильмов в локалку, отслеживает состояние
  useEffect(() => {
    if (currentUser && currentUser.email) {
      if (localStorage.getItem(`${currentUser.email} - moviesQuery`)) {
        const localShortMovies = JSON.parse(
          localStorage.getItem(`${currentUser.email} - moviesQuery`)
        );
        setQueryMovies(localShortMovies);

        if (localStorage.getItem(`${currentUser.email} - shortMovies`)) {
          const localQueryMovies = JSON.parse(
            localStorage.getItem(`${currentUser.email} - shortMovies`)
          );
          setShortMovies(localQueryMovies);
        }
        if (localStorage.getItem(`${currentUser.email} - queryUser`)) {
          const localQueryUser = localStorage.getItem(
            `${currentUser.email} - queryUser`
          );
          setQueryUser(localQueryUser);
        }
        if (
          localStorage.getItem(`${currentUser.email} - checkbox`) === "true"
        ) {
          setChecked(true);
        } else {
          setChecked(false);
        }
      }
    }
  }, [currentUser]);

  // СОХРАНЕННЫЕ ФИЛЬМЫ
  const [moviesSave, setMoviesSave] = useState([]); // Все
  const [savedMovies, setSavedMovies] = useState([]); // Все, но меняются при поиске
  const [shortSavedMovies, setShortSavedMovies] = useState([]); // Короткие естественно
  const [isCheckedSave, setIsChekedSave] = useState(false); // Чекбокс в сохраненках

  // Переключатель состояния чекбокса короткометражек
  function handleCheckedSave(value) {
    setIsChekedSave(value);
    localStorage.setItem(`${currentUser.email} - checkboxSave`, value);
  }
  // Фильтрация фильмов из моего апи
  function filterSavedMovies(movies, query) {
    const moviesQuery = movies.filter((movie) => {
      const movieRU = String(movie.nameRU).toLowerCase().trim();
      const movieEN = String(movie.nameEN).toLowerCase().trim();
      const movieQuery = query.toLowerCase().trim();
      return (
        movieRU.indexOf(movieQuery) !== -1 || movieEN.indexOf(movieQuery) !== -1
      );
    });
    if (moviesQuery.length === 0) {
      setErrorText('Ничего не найдено')
    } else {
      setErrorText('');
    }
    setSavedMovies(moviesQuery);
    setShortSavedMovies(filterShortMovies(moviesQuery));
    localStorage.setItem(
      `${currentUser.email} - moviesSaved`,
      JSON.stringify(moviesQuery)
    );
    localStorage.setItem(
      `${currentUser.email} - shortMoviesSaved`,
      JSON.stringify(filterShortMovies(moviesQuery))
    );
  }

  // Функция вызова поиска / фильтрации
  function handleSearchSubmitSaved(inputValue) {
    filterSavedMovies(moviesSave, inputValue)
  }

  // Получение всех сохраненных фильмов
  function getSavedMovies(){
    if (loggedIn && currentUser) {
      MainApi.getSavedMovies()
      .then((movies) => {
        //const userMovies = movies.filter(i => i.owner === currentUser._id)
        setMoviesSave(movies);
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }

  useEffect(() => {
    getSavedMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, currentUser])

  // Сохранения фильмов
  function handleSaveMovie(movie) {
    setPreload(true)
    MainApi.setMovie(movie)
      .then((res) => {
        // const userMovies = moviesSave.filter(i => i.owner === currentUser._id)
        setSavedMovies((savedMovies) => [...savedMovies, res]);
        setMoviesSave((savedMovies) => [...savedMovies, res]);

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setPreload(false));
  }

  //Удаление фильмов
  function deleteSavedMovies(movie) {
    setPreload(true)
    const savedMovie = moviesSave.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    MainApi.delMovie(savedMovie._id)
      .then(() => {
        getSavedMovies();
      })
      .catch((err) => console.log(err))
      .finally(() => setPreload(false));
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
              <Profile
                loggedIn={loggedIn}
                signOut={signOut}
                onUpdateUser={handleUpdateUser}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                errorText={errorText}
                handleSaveMovie={handleSaveMovie}
                queryUser={queryUser}
                isChecked={isChecked}
                isCheckedSave={isCheckedSave}
                handleChecked={handleChecked}
                deleteSavedMovies={deleteSavedMovies}
                search={handleSearchSubmit}
                queryMovies={queryMovies}
                shortMovies={shortMovies}
                location={true}
                loggedIn={loggedIn}
                moviesSave={moviesSave}
                savedMovies={savedMovies}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                errorText={errorText}
                queryUser={queryUser}
                handleCheckedSave={handleCheckedSave}
                savedMovies={savedMovies}
                shortSavedMovies={shortSavedMovies}
                searchSaved={handleSearchSubmitSaved}
                deleteSavedMovies={deleteSavedMovies}
                isChecked={isChecked}
                isCheckedSave={isCheckedSave}
                location={false}
                loggedIn={loggedIn}
                moviesSave={moviesSave}
              />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Preloader isOpen={preload} />
    </CurrentUserContext.Provider>
  );
}

export default App;
