import {
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  createContext,
  useState,
  useCallback
} from 'react'
import { authApi, type AuthState } from 'modules/auth'
import { type AuthUserValues } from 'modules/currentUser'
import { hasJWT, toggleJWT } from 'utils/helpers'
import { useRequest } from 'utils/hooks'
import { useCurrentUser } from 'core/providers'
import { clearFilterQuery } from 'modules/movies'

const AuthContext = createContext<AuthState>({} as AuthState)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { request, error, isLoading, setIsLoading } = useRequest({ initialLoading: true })
  const [isAuth, setIsAuth] = useState(false)
  const [hasToken, setHasToken] = useState(() => Boolean(hasJWT()))
  const { setUser } = useCurrentUser()

  const loginUser = useCallback(() => {
    setIsAuth(true)
    toggleJWT(true)
    setHasToken(true)
  }, [])

  const login = useCallback(async ({ email, password }: AuthUserValues) => {
    return await request(async () =>
      await authApi.login({ email, password })
        .then(loginUser)
        .catch(console.log))
  }, [request, loginUser])

  const register = useCallback(async ({ email, password, name }: AuthUserValues) => {
    return await request(async () =>
      await authApi.register({ email, password, name })
        .then((user) => {
          setUser(user)
          loginUser()
        }))
  }, [request, loginUser, setUser])

  const getUserInfo = useCallback(async () => {
    return await request(async () =>
      await authApi.getUserInfo()
        .then((user) => {
          setUser(user)
          setIsAuth(true)
          toggleJWT(true)
        })
        .catch(() => {
          toggleJWT(false)
          clearFilterQuery()
        }))
  }, [request, setUser])

  const logout = useCallback(async () => {
    return await request(async () =>
      await authApi.logout()
        .then(() => {
          setUser({})
          setIsAuth(false)
          setHasToken(false)
          toggleJWT(false)
          clearFilterQuery()
        })
        .catch(console.log)
    )
  }, [request, setUser])

  useEffect(() => {
    hasToken
      ? getUserInfo()
      : setIsLoading(false)
  }, [hasToken, setIsLoading, getUserInfo])

  const store = useMemo<AuthState>(() => ({
    isAuth,
    login,
    register,
    logout,
    error,
    isLoading
  }), [
    isAuth,
    login,
    register,
    logout,
    error,
    isLoading
  ])

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
