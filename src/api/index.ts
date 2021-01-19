import { Router } from 'express'

import { jwtMiddleware } from '../shared/middewares/jwt'

import auth from './auth'
import user from './user'

const routes = Router()

routes.use("/auth", auth)
routes.use("/user", jwtMiddleware, user)


export default routes