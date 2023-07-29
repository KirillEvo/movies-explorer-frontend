import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function Movies({
  errorText,
  queryUser,
  isChecked,
  isCheckedSave,
  handleChecked,
  search,
  queryMovies,
  shortMovies,
  location,
  loggedIn,
  handleSaveMovie,
  moviesSave,
  savedMovies,
  deleteSavedMovies
}) {
  return (
    <main>
      <Header loggedIn={loggedIn} />
      <SearchForm
        errorText={errorText}
        queryUser={queryUser}
        shortMovies={shortMovies}
        isChecked={isChecked}
        isCheckedSave={isCheckedSave}
        handleChecked={handleChecked}
        search={search}
      />
      <MoviesCardList
        isChecked={isChecked}
        queryMovies={queryMovies}
        shortMovies={shortMovies}
        location={location}
        handleSaveMovie={handleSaveMovie}
        moviesSave={moviesSave}
        savedMovies={savedMovies}
        deleteSavedMovies={deleteSavedMovies}
      />
      <Footer />
    </main>
  );
}
