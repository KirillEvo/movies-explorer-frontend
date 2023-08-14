import promo from '../../../images/text__COLOR_landing-logo.svg'
import './Promo.css';

function Promo () {
  return(
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__text-block'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__paragraph'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className='promo__link' href='#about-project'>Узнать больше</a>
        </div>
        <img className='promo__img' src={promo} alt='Веб-картинка'/>
      </div>
    </section>
  )
}

export default Promo;
