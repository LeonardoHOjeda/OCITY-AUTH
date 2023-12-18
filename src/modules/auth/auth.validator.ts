import { bodyValidator } from '@/middlewares/validator'
import { check } from 'express-validator'

export const storeValidators = [bodyValidator]

export const updateValidators = [bodyValidator]

export const registerValidator = [
  check('username').isString().withMessage('Field must be string').notEmpty().withMessage('Field must not be empty'),
  check('surname').isString().notEmpty(),
  check('phone').isString().notEmpty(),
  check('email').isEmail().notEmpty(),
  check('pswd').isString().notEmpty(),
  check('postalCode').isString().notEmpty(),
  check('name').isString().notEmpty(),
  check('street').isString().notEmpty(),
  check('locality').isString().notEmpty(),
  check('country').isString().notEmpty(),
  bodyValidator
]

export const loginValidator = [
  check('username').notEmpty().withMessage('Username must not be empty'),
  check('pswd').notEmpty().withMessage('Password must not be empty'),
  bodyValidator
]
