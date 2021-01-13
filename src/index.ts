import server from './server' 

import { config } from './shared/environments/environment'

server.listen(config.port, () => {
  console.log(`Example app listening at http://localhost: ${config.port}`)
})

