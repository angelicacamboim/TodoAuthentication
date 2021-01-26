import { Request, Response, NextFunction } from 'express'
import Model from './model'

const index = async (req: Request, res:Response, next: NextFunction) => {
    const user = await Model.find(req.body)
    
    const {userid} =  req.headers
//    const users = [
//        {name: 'teste 1'},
//        {name: 'teste 2'}
//    ]
    res.status(200).json( {user, userid})
 
}

export { index }