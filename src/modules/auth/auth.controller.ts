import { NextFunction, Request, Response } from 'express'
// import { AuthService } from './services'

/**
 * Return all entities
 * @param req
 * @param res
 * @param next
 */
export async function index (req: Request, res: Response, next: NextFunction): Promise<void> {
  // const finder = new AuthService()
}

/**
 * Return one instance of entity
 * @param req
 * @param res
 * @param next
 */
export async function show (req: Request, res: Response, next: NextFunction): Promise<void> {
  // const { id } = req.params
  // const finder = new AuthService()
}

/**
 * Save an entity
 * @param req
 * @param res
 * @param next
 */
export async function store (req: Request, res: Response, next: NextFunction): Promise<void> {
  // const saver = new AuthService()
}

/**
 * Update an entity
 * @param req
 * @param res
 * @param next
 */
export async function update (req: Request, res: Response, next: NextFunction): Promise<void> {
  // const { id } = req.params
  // const updater = new AuthService()
}

/**
 * Destroy one instance of an entity
 * @param req
 * @param res
 * @param next
 */
export async function destroy (req: Request, res: Response, next: NextFunction): Promise<void> {
  // const { id } = req.params
  // const destroyer = new AuthService()
}
