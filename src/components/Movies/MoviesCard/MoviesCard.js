import React from 'react'
import pic1 from '../../../images/pic1.png'

export default function MoviesCard() {
  return (
    <article className='movies-list__article'>
      <div className='movies-list__card'>
        <button className='movies-list__btn-save'>Сохранить</button>
        <a href="/">
          <img className='movies-list__img' src={pic1} alt="Изображение фильма"/>
        </a>
      </div>
      <div className='movies-list__info'>
        <h2 className='movies-list__text'>33 слова о дизайне</h2>
        <p className='movies-list__hours'>1ч 17м</p>
      </div>
    </article>
  )
}
