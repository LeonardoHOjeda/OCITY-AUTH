import { DataSource } from 'typeorm'
import { settings } from '@/config/settings'
import migrations from './migrations'
import { User } from '@/entities/user.entity'
import { UserRole } from '@/entities/user_role.entity'
import { Role } from '@/entities/role.entity'
import { Seed } from '@/entities/seed.entity'

const { DB } = settings

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB.HOST,
  port: Number(DB.PORT),
  username: DB.USER,
  password: DB.PASSWORD,
  database: DB.NAME,
  synchronize: false,
  logging: false,
  entities: [User, UserRole, Role, Seed],
  migrations,
  extra: {
    trustServerCertificate: true
  }
})
