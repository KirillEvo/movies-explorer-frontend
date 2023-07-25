import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <hr className="footer__hr"/>
        <div className="footer__block">
          <p className="footer__date">© 2023</p>
          <ul className="footer__links">
            <li><a target='_blank' className="footer__link" href="https://practicum.yandex.ru/" rel="noreferrer">Яндекс.Практикум</a></li>
            <li><a target='_blank' className="footer__link" href="https://github.com/KirillEvo" rel="noreferrer">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
