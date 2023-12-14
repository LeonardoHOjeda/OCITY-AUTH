import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { UserRole } from './user_role.entity'

@Entity('roles')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    name: string

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date

  @OneToMany(() => UserRole, (model) => model.role)
    roles: UserRole[]
}
