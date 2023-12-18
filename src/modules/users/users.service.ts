/* eslint-disable @typescript-eslint/strict-boolean-expressions */
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
      },
      relations: {
        roles: true
      }
    })

    console.log(user)

    if (user == null) throw new HTTPError(404, 'User not found')

    for await (const role of user.roles) {
      if (!body.roles.includes(role.role_id)) {
        await UserRole.remove(role)
      }
    }

    for await (const role of body.roles) {
      if (!user.roles.map(role => role.role_id).includes(role)) {
        await UserRole.save({ role_id: role, user_id: id })
      }
    }

    await User.update(id, {
      username: body.username,
      surname: body.surname,
      phone: body.phone,
      email: body.email,
      pswd: body.pswd,
      postalCode: body.postalCode,
      name: body.name,
      street: body.street,
      locality: body.locality,
      country: body.country
    })

    await user.reload()
    return user
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
