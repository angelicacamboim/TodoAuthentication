import { Router } from 'express'

import * as controller from './controller'

const routes = Router()

routes.post("/", controller.index)


export default routes