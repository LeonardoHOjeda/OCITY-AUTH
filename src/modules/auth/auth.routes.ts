import { Router } from 'express'
import * as authController from './auth.controller'
import { registerValidator, loginValidator } from './auth.validator'
// import { storeValidators, updateValidators } from './auth.validator'

const router = Router()

router.post('/register', [...registerValidator], authController.register)
router.post('/login', [...loginValidator], authController.login)
//
// router.get('/:id', Controller.show)
// //
// router.post('/', storeValidators, Controller.store)
// //
// router.put('/:id', updateValidators, Controller.update)
// //
// router.delete('/:id', Controller.destroy)

export default router
