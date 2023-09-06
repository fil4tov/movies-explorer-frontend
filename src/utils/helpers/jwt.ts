import { JWT_STORAGE_KEY } from '../constants'

export const toggleJWT = (state: boolean) => {
  state
    ? localStorage.setItem(JWT_STORAGE_KEY, 'true')
    : localStorage.removeItem(JWT_STORAGE_KEY)
}

export const hasJWT = () => {
  return localStorage.getItem(JWT_STORAGE_KEY)
}
