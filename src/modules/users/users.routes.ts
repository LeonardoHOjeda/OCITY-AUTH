import { Router } from 'express'
import * as userController from './users.controller'
import { storeValidators, updateValidators } from './users.validator'

const router = Router()

router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/', storeValidators, userController.store)
router.put('/:id', updateValidators, userController.update)
router.delete('/:id', userController.destroy)

export default router
