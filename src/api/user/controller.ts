import { Request, Response, NextFunction } from 'express'

const list = (req: Request, res:Response, next: NextFunction) => {
    const {userid} =  req.headers
   const users = [
       {name: 'teste 1'},
       {name: 'teste 2'}
   ]
    res.status(200).json( {users, userid})
 
}

export { list }