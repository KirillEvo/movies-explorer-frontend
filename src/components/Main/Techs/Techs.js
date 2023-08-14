import './Techs.css'

function Techs () {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title-one">Технологии</h2>
        <hr className="techs__hr"/>
        <div className="techs__content">
          <h3 className="techs__title">7 технологий</h3>
          <p className='techs__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__list'>
            <li className='techs__item'>HTML</li>
            <li className='techs__item'>CSS</li>
            <li className='techs__item'>JS</li>
            <li className='techs__item'>React</li>
            <li className='techs__item'>Git</li>
            <li className='techs__item'>Express.js</li>
            <li className='techs__item'>mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
