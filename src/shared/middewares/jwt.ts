import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import {config} from '../environments/environment'
import {IPayload} from '../interfaces/payload'


//verificação de token
const jwtMiddleware = (req: Request, res:Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(401).json( { message: 'No token provided'})
    }

    const token = authorization.split('Bearer ')[1]

    jwt.verify(token, config.jwtSecret, (err, dec) => {
        if(err) {
            return res.status(401).json( { message: 'Failed to authentication!'})
        }

        let decoded: IPayload | undefined = {}

        if(decoded){
            //interface decoded
            decoded = dec
            const id = decoded?.user?.id || ''
            //setar o header
            req.headers['userid'] = id
        }
        next()
    })

}

export { jwtMiddleware }
