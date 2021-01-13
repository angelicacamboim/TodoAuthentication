import { Router, Request, Response, NextFunction } from 'express'

import api from "./api"

const routes = Router()

// health check
routes.get('/health', (req: Request, res: Response, next: NextFunction)=> {
    res.status(200).json({ server: "server it's works!"})
})

//Routes api
routes.use(api)

export default routes