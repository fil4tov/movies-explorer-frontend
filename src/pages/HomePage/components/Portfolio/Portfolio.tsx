import { Link, Section } from 'components/UI'
import { portfolioLinks } from 'utils/constants'
import './Portfolio.scss'
import arrow from 'assets/images/arrow.svg'

export const Portfolio = () => {
  return (
    <Section className='portfolio'>
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        {portfolioLinks.map(({ name, link }, i) => (
          <PortfolioLink key={i} name={name} link={link} />
        ))}
      </ul>
    </Section>
  )
}

interface PortfolioLinkProps {
  name: string
  link: string
}

const PortfolioLink = ({ name, link }: PortfolioLinkProps) => {
  return (
    <li className="portfolio__item">
      <Link className="portfolio__link" href={link} target='_blank'>
        <span className="portfolio__link-text">{name}</span>
        <img src={arrow} alt="Ссылка" />
      </Link>
    </li>
  )
}
