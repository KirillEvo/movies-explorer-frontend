import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import { useFormWithValidation } from "../../../utils/hooks/validationForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

export default function SearchForm({ errorText, queryUser, shortMovies, isChecked, isCheckedSave, handleChecked, handleCheckedSave, search, searchSaved }) {
  const { values, handleChange, isValid, setIsValid } = useFormWithValidation();
  const location = useLocation();
  const [savePage, setSavePage] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    isValid
      ? (savePage ? search(values.search) : searchSaved(values.search))
      : setError("Нужно ввести ключевое слово");
  };

  useEffect(() => {
    if (location.pathname === '/movies') {
      values.search = queryUser;
      setIsValid(true);
      setSavePage(true)
    } else {
      values.search = '';
      setSavePage(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (values.search.length > 0) {
      setError("");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleChange]);

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit} noValidate>
          <div className="search__block">
            <input
              required
              minLength={1}
              name="search"
              type="text"
              value={values.search || ''}
              onChange={handleChange}
              className="search__input"
              placeholder="Фильм"
            ></input>
            <button className="search__btn"></button>
          </div>
          <span className="search__error">{error || errorText}</span>
          <FilterCheckbox savePage={savePage} shortMovies={shortMovies} isChecked={isChecked} isCheckedSave={isCheckedSave} handleChecked={handleChecked} handleCheckedSave={handleCheckedSave} />
        </form>
        <hr className="search__hr" />
      </div>
    </section>
  );
}
