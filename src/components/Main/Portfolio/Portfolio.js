import './Portfolio.css';

function Portfolio () {
  return(
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Portfolio</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a className="portfolio__link" href="/">
              <p className="portfolio__link-p">Статичный сайт</p>
              <p className="portfolio__link-p">↗</p>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="/">
              <p className="portfolio__link-p">Адаптивный сайт</p>
              <p className="portfolio__link-p">↗</p>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="/">
              <p className="portfolio__link-p">Одностраничное приложение</p>
              <p className="portfolio__link-p">↗</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
