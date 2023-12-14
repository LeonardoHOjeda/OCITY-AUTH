import { Role } from '@/entities/role.entity'
import { HTTPError } from '@/middlewares/error_handler'

class RolesService {
  async findAll (): Promise<Object[]> {
    const roles = await Role.find()

    return roles
  }

  async findOne (id: any): Promise<Role> {
    const role = await Role.findOne({
      where: {
        id
      }
    })

    if (role == null) {
      throw new HTTPError(404, 'Role not found')
    }

    return role
  }

  async store (body: any): Promise<Object> {
    return {}
  }

  async update (id: any, body: any): Promise<Object> {
    return {}
  }

  async destroy (id: any): Promise<Object> {
    return {}
  }

  async delete (id: any): Promise<Object> {
    return {}
  }
}

export const rolesService = new RolesService()
