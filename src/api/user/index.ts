import { Router } from 'express'

import * as controller from './controller'

const routes = Router()

routes.get("/", controller.index)
routes.get("/show/:id", controller.show)
routes.post("/", controller.store)
routes.put("/:id", controller.update)
routes.delete("/:id", controller.destroy)


export default routes