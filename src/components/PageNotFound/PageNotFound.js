import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <section className='page-not-found'>
      <h1 className='page-not-found__title'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <Link className='page-not-found__link' to='/'>Назад</Link>
    </section>
  )
}
