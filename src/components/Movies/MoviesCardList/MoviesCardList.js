import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ location }) {
  const [cardCount, setCardCount] = useState(0);
  const [cardCountSave, setCardCountSave] = useState(0);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth > 992) {
        setCardCount(12);
        setCardCountSave(3);
      } else if (screenWidth > 767) {
        setCardCount(8);
        setCardCountSave(3);
      } else {
        setCardCount(5);
        setCardCountSave(2);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className='movies-list'>
      <div className={'movies-list__content ' + (!location ? 'movies-list__content_saved' : '')}>
      {location ? Array.from({ length: cardCount }, (_, index) => (
          <MoviesCard key={index} />
        )) : Array.from({ length: cardCountSave }, (_, index) => (
          <MoviesCard key={index} />
        )) }

      </div>
      {!location ? '' : <button className='movies-list__more'>Ещё</button> }

    </section>
  )
}
