import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function SavedMovies(props) {
  return (
    <main>
      <Header loggedIn={props.loggedIn}/>
      <SearchForm/>
      <MoviesCardList location={props.location}/>
      <Footer/>
    </main>
  )
}
