import { Service } from 'utils'
import { MAIN_URL } from 'utils/constants'
import { type User, type AuthUserValues } from 'modules/currentUser'

class AuthService extends Service {
  async login (data: AuthUserValues) {
    return await this.requestWithBody('signin', 'POST', data)
  }

  async register (data: AuthUserValues) {
    return await this.requestWithBody<User>('signup', 'POST', data)
  }

  async getUserInfo () {
    return await this.request<User>('users/me', 'GET')
  }

  async logout () {
    return await this.request('signout', 'GET')
  }
}

export const authApi = new AuthService({
  baseUrl: MAIN_URL,
  credentials: 'include'
})
