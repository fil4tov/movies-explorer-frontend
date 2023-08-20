import { Button, Section } from 'components/UI'
import './NotFound.scss'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const onGoBack = () => {
    navigate(-1)
  }

  return (
    <Section className='not-found'>
      <div className='not-found__info'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>
          Страница не найдена
        </p>
      </div>
      <Button className='not-found__button' onClick={onGoBack}>Назад</Button>
    </Section>
  )
}

export default NotFoundPage
