import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({
  movie,
  handleSaveMovie,
  deleteSavedMovies,
  checkingSavedMovies,
}) {
  const url = "https://api.nomoreparties.co/";
  const location = useLocation();

  const duration = (duration) => {
    const hours = Math.trunc(duration / 60);
    const min = duration % 60;
    if (hours === 0) {
      return `${min}м`;
    } else {
      return `${hours}ч ${min}м`;
    }
  };

  const handleSave = () => {
    handleSaveMovie(movie);
  };

  const handleDelete = () => {
    deleteSavedMovies(movie);
  };

  useEffect(() => {
  }, [checkingSavedMovies])

  return (
    <article className="movies-list__article">
      <div className="movies-list__card">
        {location.pathname === '/saved-movies' ? (
          <button onClick={handleDelete} className="movies-list__btn-deleted"></button>
        ) : (
          <button onClick={checkingSavedMovies ? handleDelete : handleSave} className={checkingSavedMovies ? 'movies-list__btn-saved' : 'movies-list__btn-save'}>
          {checkingSavedMovies ? '' : 'Сохранить'}
        </button>
        )}

        {/* {checkingSavedMovies ? (
          <button className="movies-list__btn-saved"></button>
        ) : (
          <button onClick={handleSave} className="movies-list__btn-save">
            Сохранить
          </button>
        )} */}
        <a target="_blank" className="movies-list__link" href={movie.trailerLink} rel="noreferrer">
          <img
            className="movies-list__img"
            src={movie.image.url ? url + movie.image.url : movie.image}
            alt={movie.nameRu}
          />
        </a>
      </div>
      <div className="movies-list__info">
        <h2 className="movies-list__text">{movie.nameRU}</h2>
        <p className="movies-list__hours">{duration(movie.duration)}</p>
      </div>
    </article>
  );
}
