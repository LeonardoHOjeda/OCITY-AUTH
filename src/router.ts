import { Router } from 'express'
import usersRoutes from './modules/users/users.routes'
import authRoutes from './modules/auth/auth.routes'
const router = Router()

// importing all routes here
router.get('/', (req, res) => {
  return res.json({ Hello: 'World' })
})

router.use('/api/v1_1/auth', authRoutes)
router.use('/api/v1_1/users', usersRoutes)

export default router
