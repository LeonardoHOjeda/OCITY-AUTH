import { NextFunction, Request, Response } from 'express'
import { usersService } from './users.service'

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
    const finder = await usersService.findOne(Number(id))

    res.json(finder)
  } catch (error) {
    next(error)
  }
}

export async function store (req: Request, res: Response, next: NextFunction): Promise<void> {
  const { body } = req
  const saver = await usersService.store(body)

  res.status(201).json(saver)
}

export async function update (req: Request, res: Response, next: NextFunction): Promise<void> {
  const { id } = req.params
  const updater = await usersService.update(Number(id), req.body)

  res.json(updater)
}

export async function destroy (req: Request, res: Response, next: NextFunction): Promise<void> {
  const { id } = req.params
  try {
    await usersService.destroy(Number(id))

    res.status(204).end()
  } catch (error) {
    next(error)
  }
}
