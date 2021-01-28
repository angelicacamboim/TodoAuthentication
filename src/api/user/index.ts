import { Router } from 'express'

import * as controller from './controller'
import {storeSchema, paramsSchema} from './validation'

const routes = Router()

routes.get("/", controller.index)
routes.get("/show/:id", paramsSchema, controller.show)
routes.post("/", storeSchema, controller.store)
routes.put("/:id", paramsSchema, controller.update)
routes.delete("/:id", paramsSchema, controller.destroy)


export default routes