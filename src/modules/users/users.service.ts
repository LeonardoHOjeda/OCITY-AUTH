import { UserRole } from '@/entities/user_role.entity'
import { User } from '../../entities/user.entity'
import { HTTPError } from '../../middlewares/error_handler'

class UsersService {
  async findAll (): Promise<User[]> {
    const users = await User.find()

    return users
  }

  async findOne (id: number): Promise<User> {
    const user = await User.findOne({
      where: {
        id
      }
    })

    if (user == null) {
      throw new HTTPError(404, 'User not found')
    }

    return user
  }

  async store (body: any): Promise<User> {
    const user = await User.create({
      ...body,
      roles: body.roles?.map((role: number) => UserRole.create({ role_id: role }))
    }).save()

    return user
  }

  async update (id: number, body: any): Promise<any> {
    const user = await User.findOne({
      where: {
        id
      }
    })

    if (user == null) {
      throw new HTTPError(404, 'User not found')
    }

    const updatedUser = await User.update(id, body)

    return updatedUser
  }

  async destroy (id: number): Promise<void> {
    const user = User.findOneBy({ id })

    if (user == null) {
      throw new HTTPError(404, 'User not found')
    }

    await User.delete(id)
  }
}

export const usersService = new UsersService()
