import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import {config} from '../environments/environment'
import {IPayload} from '../interfaces/payload'


//verificação de token
const verifyMiddleware = (req: Request, res:Response, next: NextFunction) => {
    const { 'x-access-token': accessToken } = req.headers;
    if(!accessToken) {
        return res.status(401).json( { message: 'No token provided'})
    }

    const token = typeof accessToken === 'string' ? accessToken : accessToken[0]

    jwt.verify(token, config.jwtSecret, (err, dec) => {
        if(err) {
            return res.status(401).json( { message: 'Failed to authentication!'})
        }

        let decoded: IPayload | undefined = {}

        if(decoded.user?.id){
            req.headers['userid'] = String(decoded.user.id)
        }
        next()
    })

}

export { verifyMiddleware }
