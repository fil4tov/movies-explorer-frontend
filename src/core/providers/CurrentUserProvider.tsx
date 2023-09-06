import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

import {
  type CurrentUserState,
  type User,
  userService,
  type UpdateUserValues
} from 'modules/currentUser'
import { useRequest } from 'utils/hooks'

const CurrentUserContext = createContext<CurrentUserState>({} as CurrentUserState)

export const CurrentUserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<Partial<User>>({})
  const { request, isLoading, error, setError } = useRequest()

  const updateUser = useCallback(async (data: UpdateUserValues) => {
    return await request(async () =>
      await userService.updateUser(data)
        .then(user => {
          setUser(user)
          setError('')
        }))
  }, [request, setError])

  const store = useMemo<CurrentUserState>(() => ({
    user,
    setUser,
    updateUser,
    isLoading,
    error
  }), [
    user,
    updateUser,
    isLoading,
    error
  ])

  return (
    <CurrentUserContext.Provider value={store}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => {
  return useContext(CurrentUserContext)
}
