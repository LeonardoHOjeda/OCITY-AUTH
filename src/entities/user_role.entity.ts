import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User } from './user.entity'
import { Role } from './role.entity'

@Entity('users_roles')
export class UserRole extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    user_id: number

  @Column()
    role_id: number

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date

  @ManyToOne(() => User, (user) => user.roles)
  @JoinColumn({ name: 'user_id' })
    user: User

  @ManyToOne(() => Role, (model) => model.roles)
  @JoinColumn({ name: 'role_id' })
    role: Role
}
