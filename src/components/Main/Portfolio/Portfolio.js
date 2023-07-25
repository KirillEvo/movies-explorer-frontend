import './Portfolio.css';

function Portfolio () {
  return(
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a target='_blank' className="portfolio__link" href="https://github.com/KirillEvo/how-to-learn" rel="noreferrer">
              <p className="portfolio__link-p">Статичный сайт</p>
              <p className="portfolio__link-p portfolio__link-p_line">↗</p>
            </a>
          </li>
          <li className="portfolio__item">
            <a target='_blank' className="portfolio__link" href="https://github.com/KirillEvo/russian-travel" rel="noreferrer">
              <p className="portfolio__link-p">Адаптивный сайт</p>
              <p className="portfolio__link-p portfolio__link-p_line">↗</p>
            </a>
          </li>
          <li className="portfolio__item">
            <a target='_blank' className="portfolio__link" href="https://kirillevo.github.io/sign-in" rel="noreferrer">
              <p className="portfolio__link-p">Одностраничное приложение</p>
              <p className="portfolio__link-p portfolio__link-p_line">↗</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
