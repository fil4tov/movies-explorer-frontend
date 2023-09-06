import { Button } from 'components/UI'
import { type Movie, moviesApi } from 'modules/movies'
import { useMemo } from 'react'
import { getTimeFromMinutes } from 'utils/helpers'
import { useLocation } from 'react-router-dom'
import { APP_ROUTES } from 'core/config'
import './MovieCard.scss'
import { omit } from 'ramda'
import { useMovies } from 'core/providers'
import { useRequest } from 'utils/hooks'

export const MovieCard = (movie: Movie) => {
  const { duration, movieId, image, nameRU } = movie
  const { savedMovies, addMovie, deleteMovie } = useMovies()
  const { request, isLoading } = useRequest()
  const location = useLocation()

  const savedMoviesIds = useMemo(() => savedMovies.map(movie => movie.movieId), [savedMovies])
  const movieDbId = useMemo(
    () => savedMovies.find(movie => movie.movieId === movieId)?._id as string,
    [savedMovies, movieId]
  )
  const isSaved = useMemo(() => savedMoviesIds?.includes(movieId), [savedMoviesIds, movieId])

  const filmDuration = getTimeFromMinutes(duration)

  const isSavedMoviesPage = location.pathname === APP_ROUTES.SAVED_MOVIES

  const renderMoviesPageButton = () => (
    <Button
      className="movie-card__button"
      color={!isSaved ? 'grey' : 'red'}
      borderRadius="xl"
      onClick={isSaved ? handleDeleteMovie : handleAddMovie}
      disabled={isLoading}
    >
      {!isSaved ? 'Сохранить' : '✓'}
    </Button>
  )

  const renderSavedMoviesPageButton = () => (
    <Button
      className="movie-card__button"
      color="grey"
      borderRadius="xl"
      onClick={handleDeleteMovie}
      disabled={isLoading}
    >
      ×
    </Button>
  )

  const handleAddMovie = async () => {
    const payload = omit(['_id', 'owner'], movie)
    const res = await request(async () => await moviesApi.addMovie(payload))
    addMovie(res)
  }

  const handleDeleteMovie = async () => {
    await request(async () => await moviesApi.deleteMovie(movieDbId))
    deleteMovie(movieDbId)
  }

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <h3 className="movie-card__title" title={nameRU}>
          {nameRU}
        </h3>
        <p className="movie-card__duration">
          {filmDuration}
        </p>
      </div>

      <div className="movie-card__body">

        <a href={movie.trailerLink} target='_blank' className='movie-card__link' rel="noreferrer">
          <img className="movie-card__image" src={image} alt={nameRU} />
        </a>
      </div>

      <div className="movie-card__footer">
        {isSavedMoviesPage ? renderSavedMoviesPageButton() : renderMoviesPageButton()}
      </div>
    </div>
  )
}
