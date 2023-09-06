import { Service } from 'utils'
import { MAIN_URL } from 'utils/constants'
import { type User, type UpdateUserValues } from 'modules/currentUser/types'

class UserService extends Service {
  async updateUser (data: UpdateUserValues) {
    return await this.requestWithBody<User>('users/me', 'PATCH', data)
  }
}

export const userService = new UserService({
  baseUrl: MAIN_URL,
  credentials: 'include'
})
