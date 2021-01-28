import { Request, Response, NextFunction } from 'express'

import Model from './model'

const login = async (req: Request, res:Response, next: NextFunction) => {
  try {
    const user = await Model.findUser(req.body)
    const token = Model.generateToken(user)
    res.status(200).json( {token})
 

  }catch(error){
    res.status(401).json( {login: "user is not provider"})

  }
}
   

const logout = (req: Request, res:Response, next: NextFunction) => {
    res.status(200).json( {logout: "logout it's works"})
    //deletar token

}

const create = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const user = await Model.create(req.body)
        const token = Model.generateToken(user)
        res.status(200).json( {token})
     
    
      }catch(error){
        res.status(401).json( {create: "server error"})
    
      }
}


export  { login, logout, create}