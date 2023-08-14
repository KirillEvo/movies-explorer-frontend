import AboutImg from '../../../images/h294ISHqBYY.jpg';
import './AboutMe.css';

function AboutMe() {
  return(
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title-one">Студент</h2>
        <hr className="about-me__hr"/>
        <div className="about-me__content">
          <div className="about-me__block-text">
            <h3 className='about-me__title'>Кирилл</h3>
            <p className='about-me__span'>Фронтенд-разработчик, 27 лет</p>
            <p className='about-me__paragraph'>Я родился и живу в Ногинске, закончил фалькультет интернет-маркетинга Синергия. У меня есть жена и двое котиков. Люблю слушать музыку, играть в PS и ходить в тренажерный зал. Кодер самоучка. С 2019 года работал веб-разработчиком в производственной компании. После прохождения курса по веб-разработке, начал заниматься фриланс-заказами и ушел с постоянной работы.</p>
            <a className='about-me__github' href="https://github.com/KirillEvo">Github</a>
          </div>
          <img className="about-me__img" src={AboutImg} alt="Студент"/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
