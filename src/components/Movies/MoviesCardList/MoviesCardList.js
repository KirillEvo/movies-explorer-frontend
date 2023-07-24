import React from 'react';
import './MoviesCardList.css';

import pic1 from '../../../images/pic1.png'
import pic2 from '../../../images/pic2.png'
import pic3 from '../../../images/pic3.png'


export default function MoviesCardList() {
  return (
    <section className='movies-list'>
      <div className='movies-list__content'>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic1} alt="pic1"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>33 слова о дизайне</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-saved'></button>
            <a href="/">
              <img className='movies-list__img' src={pic2} alt="pic2"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>Киноальманах «100 лет дизайна»</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
        <article className='movies-list__article'>
          <div className='movies-list__card'>
            <button className='movies-list__btn-save'>Сохранить</button>
            <a href="/">
              <img className='movies-list__img' src={pic3} alt="pic3"/>
            </a>
          </div>
          <div className='movies-list__info'>
            <p className='movies-list__text'>В погоне за Бенкси</p>
            <p className='movies-list__hours'>1ч 17м</p>
          </div>
        </article>
      </div>
      <button className='movies-list__more'>Ещё</button>
    </section>
  )
}
