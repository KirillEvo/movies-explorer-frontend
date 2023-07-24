import React from 'react'
import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <div className='search__block'>
            <input className='search__input'></input>
            <button className='search__btn'></button>
          </div>
          <label className="toggle">
            <input className="toggle-checkbox" type="checkbox"/>
            <div className="toggle-switch"></div>
            <span className="toggle-label">Короткометражки</span>
          </label>
        </form>
        <hr className='search__hr'/>
      </div>
    </section>
  )
}
