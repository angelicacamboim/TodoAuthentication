import { Router } from 'express'

import * as controller from './controller'
import { verifyMiddleware } from '../../shared/middewares/jwt'
import { loginSchema, createSchema } from './validation'


const routes = Router()

routes.post("/login",loginSchema, controller.login)

routes.post("/logout", verifyMiddleware, controller.logout)

routes.post("/create",createSchema, controller.create)

export default routes