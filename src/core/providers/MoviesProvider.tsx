import {
  type PropsWithChildren,
  createContext,
  useCallback, useContext,
  useEffect,
  useMemo,
  useState, useRef
} from 'react'
import { type Movie, moviesApi, type MoviesState } from 'modules/movies'
import { useRequest } from 'utils/hooks'
import { beatfilmApi } from 'modules/beatfilm'
import { useAuthContext } from 'core/providers'

const MoviesContext = createContext<MoviesState>({} as MoviesState)

export const MoviesProvider = ({ children }: PropsWithChildren) => {
  const { isAuth } = useAuthContext()
  const { request, error, isLoading } = useRequest()
  const [movies, setMovies] = useState<Movie[]>([])
  const [savedMovies, setSavedMovies] = useState<Movie[]>([])
  const areMoviesLoaded = useRef(false)

  useEffect(() => {
    if (isAuth) {
      getAllSavedMovies()
    }
  }, [isAuth])

  const getAllMovies = useCallback(async () => {
    areMoviesLoaded.current = true
    return await request(async () => await beatfilmApi.getAllMovies())
  }, [request])

  const getAllSavedMovies = useCallback(async () => {
    return await request(async () =>
      await moviesApi.getAllMovies()
        .then(setSavedMovies)
        .catch(console.log))
  }, [request])

  const addMovie = useCallback((movie: Movie) => {
    setSavedMovies([...savedMovies, movie])
  }, [savedMovies])

  const deleteMovie = useCallback((id: string) => {
    const filteredMovies = savedMovies.filter(movie => movie._id !== id)
    setSavedMovies(filteredMovies)
  }, [savedMovies])

  const store = useMemo<MoviesState>(() => ({
    movies,
    savedMovies,
    setMovies,
    setSavedMovies,
    getAllMovies,
    getAllSavedMovies,
    addMovie,
    deleteMovie,
    isLoading,
    error,
    areMoviesLoaded
  }), [
    movies,
    savedMovies,
    getAllMovies,
    getAllSavedMovies,
    addMovie,
    deleteMovie,
    isLoading,
    error
  ])

  return (
    <MoviesContext.Provider value={store}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => {
  return useContext(MoviesContext)
}
