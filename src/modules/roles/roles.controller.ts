import { NextFunction, Request, Response } from 'express'
import { rolesService } from './roles.service'
import { usersService } from '../users/users.service'

export async function index (req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const finder = await usersService.findAll()

    res.json(finder)
  } catch (error) {
    next(error)
  }
}

export async function show (req: Request, res: Response, next: NextFunction): Promise<void> {
  const { id } = req.params
  try {
    const finder = await rolesService.findOne(id)

    res.json(finder)
  } catch (error) {
    next(error)
  }
}

export async function store (req: Request, res: Response, next: NextFunction): Promise<void> {
  // const saver = new RolesService()
}

/**
 * Update an entity
 * @param req
 * @param res
 * @param next
 */
export async function update (req: Request, res: Response, next: NextFunction): Promise<void> {
  // const { id } = req.params
  // const updater = new RolesService()
}

/**
 * Destroy one instance of an entity
 * @param req
 * @param res
 * @param next
 */
export async function destroy (req: Request, res: Response, next: NextFunction): Promise<void> {
  // const { id } = req.params
  // const destroyer = new RolesService()
}
