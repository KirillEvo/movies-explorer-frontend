import './AboutProject.css'

function AboutProject () {
  return(
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <hr className="about-project__hr"/>
        <div className="about-project__block-text">
          <div>
            <h3 className="about-project__block-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__block-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <h3 className="about-project__block-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__block-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__block"><p className='about-project__text'>1 неделя</p></div>
          <div className="about-project__block"><p className='about-project__text'>4 неделя</p></div>
          <div className="about-project__block"><p className='about-project__text'>Back-end</p></div>
          <div className="about-project__block"><p className='about-project__text'>Front-end</p></div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
