import knex from 'knex'
import * as path from 'path'

import {database} from './src/shared/environments/environment'

const baseDir = path.resolve('./src/shared/database/')

const config: any = {
    development: {
        client: 'pg',
        connection: {
            database: database.name,
            user: database.username,
            password: database.password,
            port: database.port,
            charset: 'utf8',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            extension: 'ts',
            directory: path.resolve(baseDir, 'migrations'),
        },
        seeds: {
            directory: path.resolve(baseDir, 'seeds'),
        },
        timezone: 'UTC',
        acquireConnectionTimeout: 10000,
    },

    staging: {
        client: 'pg',
        connection: {
            database: database.name,
            user: database.username,
            password: database.password,
            port: database.port,
            charset: 'utf8',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            extension: 'ts',
            directory: path.resolve(baseDir, 'migrations'),
        },
        seeds: {
            directory: path.resolve(baseDir, 'seeds'),
        },
        timezone: 'UTC',
        acquireConnectionTimeout: 10000,
    },

    production: {
        client: 'pg',
        connection: {
            database: database.name,
            user: database.username,
            password: database.password,
            port: database.port,
            charset: 'utf8',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            extension: 'ts',
            directory: path.resolve(baseDir, 'migrations'),
        },
        seeds: {
            directory: path.resolve(baseDir, 'seeds'),
        },
        timezone: 'UTC',
        acquireConnectionTimeout: 10000,
    }, 
} as knex.Config

export = config