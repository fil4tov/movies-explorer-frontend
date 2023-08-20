import { type AuthUserValues } from 'modules/currentUser/'
import { type State } from '../types'

export type AuthState = State<{
  isAuth: boolean
  login: (data: AuthUserValues) => Promise<void>
  register: (data: AuthUserValues) => Promise<void>
  logout: () => Promise<void>
}>
