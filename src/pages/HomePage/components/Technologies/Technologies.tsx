import { Section, SectionTitle } from 'components/UI'
import { technologiesList } from 'utils/constants'
import './Technologies.scss'

export const Technologies = () => {
  return (
    <Section className='technologies'>
      <SectionTitle title='Технологии' />

      <h3 className='technologies__title'>7 технологий</h3>
      <p className='technologies__subtitle'>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>

      <ul className='technologies__list'>
        {technologiesList.map((name, i) => (
          <Technology key={i} name={name} />
        ))}
      </ul>
    </Section>
  )
}

const Technology = ({ name }: { name: string }) => {
  return (
    <li className='technologies__item'>
      {name}
    </li>
  )
}
