import { User } from '@/entities/user.entity'
import { usersService } from '../users/users.service'
import { HTTPError } from '@/middlewares/error_handler'
import bcrypt from 'bcrypt'

class AuthService {
  async register (user: User) {
    const newUser = await usersService.store(user)

    return newUser
  }

  async login (username: string, password: string) {
    const user = await User.findOne({
      where: {
        username
      }
    })

    if (user == null) throw new HTTPError(401, 'Bad Credentials')

    const isMatch = bcrypt.compareSync(password, user.pswd)

    if (!isMatch) throw new HTTPError(401, 'Bad Credentials')

    return user
  }
}

export const authService = new AuthService()
