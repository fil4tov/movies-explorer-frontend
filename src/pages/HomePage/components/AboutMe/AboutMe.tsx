import { Section, SectionTitle, Link } from 'components/UI'
import { getAge } from 'utils/helpers'
import './AboutMe.scss'

import photo from 'assets/images/photo.jpg'

export const AboutMe = () => {
  return (
    <Section className="about-me">
      <SectionTitle title="Студент" />

      <div className="about-me__wrapper">
        <div className="about-me__info-container">
          <h3 className="about-me__name">
            Данил
          </h3>

          <p className="about-me__profession">
            Фронтенд-разработчик, {getAge(new Date(1998, 3, 29))} лет
          </p>

          <p className="about-me__description">
            <span>
              Живу в Москве и обожаю программирование.
              Увлекаюсь фронтенд-разработкой
              с 2022 года и постоянно развиваю свои навыки в этой области.
              В данный момент являюсь разработчиком в Cloud.ru.
            </span>
            <span>
              Кроме программирования, я также увлекаюсь киберспортом,
              в прошлом был профессиональным киберспортивным комментатором по CS:GO.
            </span>
          </p>

          <Link
            className="about-me__link"
            href="https://github.com/fil4tov"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>

        <img
          className="about-me__photo"
          src={photo}
          alt="Моя фотография"
          width={270}
          height={327}
        />
      </div>
    </Section>
  )
}
