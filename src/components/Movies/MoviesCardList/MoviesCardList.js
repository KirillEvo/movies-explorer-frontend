import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { screenWidth } from "../../../utils/constants";

export default function MoviesCardList({
  isChecked,
  isCheckedSave,
  queryMovies,
  shortMovies,
  location,
  handleSaveMovie,
  savedMovies,
  shortSavedMovies,
  deleteSavedMovies,
  moviesSave,
}) {

  const local = useLocation();
  const { desktop, tablet, mobile } = screenWidth;
  const [mount, setMount] = useState(true);
  const [showMovies, setShowMovies] = useState(desktop.movies);
  const [showMoviesItem, setShowMoviesItam] = useState([]);

  const shouldShowButton = local.pathname === "/movies" && showMoviesItem.length > 6;

  function handleMoreMovies() {
    const length = showMoviesItem.length;
    const newLength = length + showMovies.more;
    const add = queryMovies.length - length;

    if (add > 0) {
      const newMovies = queryMovies.slice(length, newLength);
      setShowMoviesItam([...showMoviesItem, ...newMovies]);
    }
  }

  function checkingSavedMovies(moviesSave, movie) {
    return moviesSave.find((item) => {
      return item.movieId === (movie.id || movie.movieId);
    });
  }

  useEffect(() => {
    function handleResize() {
      if (local.pathname === "/movies") {
        const screenWidth = window.innerWidth;
        if (screenWidth > desktop.width) {
          setShowMovies(desktop.movies);
        } else if (screenWidth > tablet.width) {
          setShowMovies(tablet.movies);
        } else {
          setShowMovies(mobile.movies);
        }
        return setMount(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    desktop.movies,
    desktop.width,
    local.pathname,
    mobile.movies,
    mobile.width,
    tablet.movies,
    tablet.width,
    mount,
  ]);

  useEffect(() => {
    if (queryMovies && queryMovies.length) {
      const newMovies = queryMovies.filter((movie, i) => i < showMovies.total);
      setShowMoviesItam(newMovies);
    } else {
      setShowMoviesItam([]);
    }
  }, [queryMovies, showMovies.total]);

  return (
    <section className="movies-list">
      <div
        className={`movies-list__content ${
          !local.pathname === "/movies" ? "movies-list__content_saved" : ""
        }`}
      >
        {local.pathname === "/movies"
          ? !isChecked
            ? showMoviesItem.map((movie) => (
                <MoviesCard
                  checkingSavedMovies={checkingSavedMovies(
                    moviesSave,
                    movie
                  )}
                  deleteSavedMovies={deleteSavedMovies}
                  handleSaveMovie={handleSaveMovie}
                  key={movie.id}
                  movie={movie}
                />
              ))
            : shortMovies.map((movie) => (
                <MoviesCard
                checkingSavedMovies={checkingSavedMovies(
                    moviesSave,
                    movie
                  )}
                  deleteSavedMovies={deleteSavedMovies}
                  handleSaveMovie={handleSaveMovie}
                  key={movie.id}
                  movie={movie}
                />
              ))
          : !isCheckedSave
          ? savedMovies.map((movie) => (
              <MoviesCard
              checkingSavedMovies={checkingSavedMovies(
                    moviesSave,
                    movie
                  )}
                deleteSavedMovies={deleteSavedMovies}
                key={movie._id}
                movie={movie}
              />
            ))
          : shortSavedMovies.map((movie) => (
              <MoviesCard
              checkingSavedMovies={checkingSavedMovies(
                    moviesSave,
                    movie
                  )}
                deleteSavedMovies={deleteSavedMovies}
                key={movie._id}
                movie={movie}
              />
            ))}
      </div>
      {shouldShowButton && !isChecked && (
        <button onClick={handleMoreMovies} className="movies-list__more">
          Ещё
        </button>
      )}
    </section>
  );
}
