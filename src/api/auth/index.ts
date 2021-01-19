import { Router } from 'express'

import * as controller from './controller'
import { jwtMiddleware } from '../../shared/middewares/jwt'


const routes = Router()

routes.post("/login", controller.login)

routes.post("/logout", jwtMiddleware, controller.logout)

routes.post("/create", controller.create)

export default routes