import { NextFunction, Request, Response } from 'express'
import { authService } from './auth.service'

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  try {
    const user = await authService.register(body)

    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  try {
    const user = await authService.login(body.username, body.pswd)

    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}
