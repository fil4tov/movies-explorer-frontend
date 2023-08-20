import { Section, SectionTitle } from 'components/UI'
import './AboutProject.scss'

export const AboutProject = () => {
  return (
    <Section id='about-project' className='about-project'>
      <SectionTitle title='О проекте' />

      <div className='about-project__info'>
        <div className='about-project__info-block'>
          <h3 className='about-project__info-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info-subtitle'>
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>

        <div className='about-project__info-block'>
          <h3 className='about-project__info-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info-subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='about-project__time-line'>
        <div className='about-project__line-container about-project__line-container_short'>
          <div className='about-project__time about-project__time_short'>
            <p className='about-project__time-text'>
              1 неделя
            </p>
          </div>
          <p className='about-project__technology'>
            Back-end
          </p>
        </div>

        <div className='about-project__line-container'>
          <div className='about-project__time'>
            <p className='about-project__time-text'>
              4 недели
            </p>
          </div>
          <p className='about-project__technology'>
            Front-end
          </p>
        </div>
      </div>

    </Section>
  )
}
