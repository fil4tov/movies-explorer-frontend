import { Section } from 'components/UI'
import promo from 'assets/images/promo.svg'
import './Promo.scss'

export const Promo = () => {
  return (
    <Section paddingY='s' className='promo' containerClassName='promo__container'>
        <div className='promo__header'>
          <div className='promo__description'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <p className='promo__subtitle'>
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
          </div>
          <img className='promo__image' width={310} height={300} src={promo} alt='Промо' />
        </div>
        <a className='button promo__button' href='#about-project'>Узнать больше</a>
    </Section>
  )
}
