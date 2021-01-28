import { Router } from 'express'

import { verifyMiddleware } from '../shared/middewares/jwt'

import auth from './auth'
import user from './user'

const routes = Router()

routes.use("/auth", auth)
routes.use("/user", verifyMiddleware, user)


export default routes