import { Router, Request, Response, NextFunction } from 'express'

const routes = Router()

routes.get('/health', (req: Request, res: Response, next: NextFunction)=> {
    res.status(200).json({ server: "server it's works!"})
})

export default routes