import { Button } from 'components/UI'
import { type Movie } from 'modules/movies'
import './MovieCard.scss'
import { useState } from 'react'
import { wordForm } from 'utils/helpers'
import { useLocation } from 'react-router-dom'
import { APP_ROUTES } from 'core/config'

type MovieCardProps = Partial<Movie>

export const MovieCard = ({ nameRU, duration, image }: MovieCardProps) => {
  const [isSaved, setIsSaved] = useState(false)
  const location = useLocation()

  const filmDuration = `${duration} ${wordForm(duration ?? 0, ['минута', 'минуты', 'минут'])}`

  const isSavedMoviesPage = location.pathname === APP_ROUTES.SAVED_MOVIES

  const renderMoviesPageButton = () => (
    <Button
      className='movie-card__button'
      color={!isSaved ? 'grey' : 'red'}
      borderRadius='xl'
      onClick={onClick}
    >
      {!isSaved ? 'Сохранить' : '✓'}
    </Button>
  )

  const renderSavedMoviesPageButton = () => (
    <Button
      className='movie-card__button'
      color='grey'
      borderRadius='xl'
    >
      ×
    </Button>
  )

  const onClick = () => {
    setIsSaved(prev => !prev)
  }

  return (
    <div className='movie-card'>
      <div className='movie-card__header'>
        <h3 className='movie-card__title' title={nameRU}>{nameRU}</h3>
        <p className='movie-card__duration'>
          {filmDuration}
        </p>
      </div>

      <div className='movie-card__body'>
        <img className='movie-card__image' src={image} alt={nameRU} />
      </div>

      <div className='movie-card__footer'>
        {isSavedMoviesPage ? renderSavedMoviesPageButton() : renderMoviesPageButton()}
      </div>
    </div>
  )
}
