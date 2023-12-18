import jwt from 'jsonwebtoken'
import { User } from '@/entities/user.entity'
import { usersService } from '../users/users.service'
import { HTTPError } from '@/middlewares/error_handler'
import bcrypt from 'bcrypt'
import { settings } from '@/config/settings'

class AuthService {
  async register (user: User) {
    const newUser = await usersService.store(user)

    return newUser
  }

  async login (username: string, password: string) {
    const user = await User.findOne({
      where: {
        username
      },
      relations: {
        roles: true
      }
    })

    if (user == null) throw new HTTPError(401, 'Bad Credentials')

    const isMatch = bcrypt.compareSync(password, user.pswd)

    if (!isMatch) throw new HTTPError(401, 'Bad Credentials')

    const token = jwt.sign({ user_id: user.id, country: user.country }, settings.SECRET, { expiresIn: '1h' })

    delete (user as any).pswd

    return {
      user,
      token
    }
  }
}

export const authService = new AuthService()
