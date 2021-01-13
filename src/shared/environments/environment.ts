import dotenv from 'dotenv'

import { env } from 'process'

import { IPg } from '../interfaces/pg'
import { IConfig } from '../interfaces/config'

dotenv.config()

const config: IConfig = {
    env: env.NODE_ENV || 'development',
    port: Number(env.NODE_PORT) || 3000,
    masterKey: env.MASTER_KEY || '',
    jwtSecret: env.JWT_SECRET || ''
}

const database: IPg = {
    username: env.POSTGRES_USER || '',
    password: env.POSTGRES_PASSWORD || '',
    name: env.POSTGRES_DB || 'postgress',
    port: Number(env.POSTGRES_PORT) || 5432,
}

export { config, database }