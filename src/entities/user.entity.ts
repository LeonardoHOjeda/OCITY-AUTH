import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { UserRole } from './user_role.entity'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    username: string

  @Column()
    surname: string

  @Column()
    phone: string

  @Column()
    email: string

  @Column()
    pswd: string

  @Column()
    postalCode: string

  @Column()
    name: string

  @Column()
    street: string

  @Column()
    locality: string

  @Column()
    country: string

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date

  @OneToMany(() => UserRole, (model) => model.user, { cascade: true })
    roles: UserRole[]
}
