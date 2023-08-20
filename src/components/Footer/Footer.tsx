import { Container, Link } from 'components/UI'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <p className='footer__info'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__copyright-container'>
          <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>

          <ul className='footer__links'>
            <li>
              <Link
                className='footer__link'
                href="https://practicum.yandex.ru/"
                target='_blank'
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link
                className='footer__link'
                href="https://github.com/fil4tov"
                target='_blank'
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
