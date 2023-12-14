import { User } from '@/entities/user.entity'
import { faker } from '@faker-js/faker'

export class UserFactory {
  static async createOne (persistent: boolean = true): Promise<User> {
    const user = User.create({
      username: faker.internet.userName(),
      surname: faker.person.lastName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      pswd: faker.internet.password(),
      postalCode: faker.location.zipCode(),
      name: faker.person.firstName(),
      street: faker.location.street(),
      locality: faker.location.city(),
      country: faker.location.country()
    })
    if (persistent) {
      await user.save()
    }

    return user
  }

  static async createMany (instances: number, persistent: boolean = true): Promise<User[]> {
    const users: User[] = []
    for (let i = 0; i < instances; i++) {
      users.push(await this.createOne(persistent))
    }

    return users
  }
}
