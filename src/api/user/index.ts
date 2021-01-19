import { Router } from 'express'

import * as controller from './controller'

const routes = Router()

routes.get("/", controller.list)


export default routes