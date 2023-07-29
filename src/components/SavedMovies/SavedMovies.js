import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  errorText,
  queryUser,
  handleCheckedSave,
  savedMovies,
  shortSavedMovies,
  searchSaved,
  deleteSavedMovies,
  isCheckedSave,
  isChecked,
  location,
  loggedIn,
  moviesSave,
})
 {
  return (
    <main>
      <Header loggedIn={loggedIn} />
      <SearchForm
        errorText={errorText}
        queryUser={queryUser}
        handleCheckedSave={handleCheckedSave}
        searchSaved={searchSaved}
        isCheckedSave={isCheckedSave}
        isChecked={isChecked}
      />
      <MoviesCardList
        deleteSavedMovies={deleteSavedMovies}
        savedMovies={savedMovies}
        shortSavedMovies={shortSavedMovies}
        location={location}
        isCheckedSave={isCheckedSave}
        moviesSave={moviesSave}
      />
      <Footer />
    </main>
  );
}
