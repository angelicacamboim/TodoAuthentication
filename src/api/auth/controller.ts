import { Request, Response, NextFunction } from 'express'

import * as model from './model'

const login = (req: Request, res:Response, next: NextFunction) => {
    const { email, password } = req.body
    const token = model.authLogin(email, password)

    if(token) {
        res.status(200).json( {token})
    } else {
        res.status(401).json( {login: "user is not provider"})
    }
}

const logout = (req: Request, res:Response, next: NextFunction) => {
    const { authorization } = req.headers
    const token = model.getToken(authorization)

    const isLogout = model.authLogout(token)
    if(isLogout){
        res.status(200).json( {logout: "logout it's works"})
    } else{
        res.status(401).json( {logout: "token it's not provider!"})
    }
}

const create = (req: Request, res:Response, next: NextFunction) => {
    const { email, password } = req.body
    const token = model.createUser(email, password)

    if(token) {
        res.status(200).json( { token })
    } else {
        res.status(401).json( {create: "user is not provider"})
    }
}

export { login, logout, create}