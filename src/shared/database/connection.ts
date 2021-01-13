import knex from 'knex'

import { config as envConfig } from '../environments/environment'
import config from '../../../knexfile'

const env = envConfig.env
const connection =  knex(config[env])

export default connection