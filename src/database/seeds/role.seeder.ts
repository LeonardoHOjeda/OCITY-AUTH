import { Role } from '@/entities/role.entity'
import { Seed } from '../seed'

export class RoleSeeder implements Seed {
  id: string = 'RoleSeeder'

  async seed (): Promise<void> {
    await Role.save({
      name: 'SUPER_ADMIN'
    })

    await Role.save({
      name: 'FOCAL_POINT'
    })

    await Role.save({
      name: 'ACTIVIST'
    })

    await Role.save({
      name: 'SCHOOLING_ALLY'
    })

    await Role.save({
      name: 'CITIZENS'
    })

    await Role.save({
      name: 'NO_ROL'
    })
  }
}
