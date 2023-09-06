import { AppRouter, AuthProvider, MoviesProvider } from './providers'
import { CurrentUserProvider } from 'core/providers/CurrentUserProvider'

export const App = () => {
  return (
    <CurrentUserProvider>
      <AuthProvider>
        <MoviesProvider>
          <AppRouter />
        </MoviesProvider>
      </AuthProvider>
    </CurrentUserProvider>
  )
}
