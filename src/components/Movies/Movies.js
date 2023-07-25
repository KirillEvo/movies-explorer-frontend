import React from 'react'
import Header from '../Header/Header'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer';

export default function Movies(props) {
  return (
    <main>
      <Header loggedIn={props.loggedIn}/>
      <SearchForm/>
      <MoviesCardList location={props.location}/>
      <Footer/>
    </main>
  )
}
