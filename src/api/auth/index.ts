import { Router } from 'express'

import * as controller from './controller'

const routes = Router()

routes.post("/login", controller.login)

routes.post("/logout", controller.logout)

routes.post("/create", controller.create)

export default routes