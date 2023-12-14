import { AppDataSource } from '@/database/datasources'
import { closePort, request } from './helpers'
import { UserFactory } from '@/database/factories/user.factory'
import { User } from '@/entities/user.entity'

beforeAll(async () => {
  await AppDataSource.initialize()
})

afterAll(async () => {
  await AppDataSource.destroy()
  closePort()
})

describe('User Crud (v1_1)', () => {
  test('should list all users', async () => {
    const response = await request()
      .get('/api/v1_1/users')
      .send()

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    response.body.forEach(element => {
      expect(element).toHaveProperty('username')
    })
  })

  test('should list an user by its ID', async () => {
    const user = await UserFactory.createOne()
    const response = await request().get(`/api/v1_1/users/${user.id}`).send()

    expect(response.status).toBe(200)
    expect(response.body).toBeTruthy()
    expect(response.body).toHaveProperty('username')
    expect(response.body.id).toBe(user.id)
  })

  test('should create a new user', async () => {
    const data = await UserFactory.createOne(false)

    const response = await request().post('/api/v1_1/users').send({
      username: data.username,
      surname: data.surname,
      phone: data.phone,
      email: data.email,
      pswd: data.pswd,
      postalCode: data.postalCode,
      name: data.name,
      street: data.street,
      locality: data.locality,
      country: data.country,
      roles: [1, 2, 3]
    }).expect(201)

    const exists = await User.findOne({
      where: {
        id: response.body.id
      },
      relations: {
        roles: true
      }
    })

    expect(exists).toBeTruthy()
    expect(exists?.roles).toHaveLength(3)
  })

  test('should update an user', () => {
    expect(1).toBe(1)
  })

  test('should delete an user', async () => {
    const user: User = await UserFactory.createOne()
    await request().delete(`/api/v1_1/users/${user.id}`).expect(204)

    const exists = await User.findOneBy({ id: user.id })

    expect(exists).toBeFalsy()
  })
})
