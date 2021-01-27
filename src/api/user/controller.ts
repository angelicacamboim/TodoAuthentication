import { Request, Response, NextFunction } from 'express'
import Model from './model'

const index = async (req: Request, res:Response, next: NextFunction) => {
   try{
    const users = await Model.index()
    res.status(200).json(users)

   }catch(error){
    res.status(401).json({message: error})
   }
     
}

const show = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const user = await Model.find({id})
        res.status(200).json(user)

    } catch(error){
        res.status(401).json({message: error})

    }

}

const store = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const user = await Model.create(req.body)
        res.status(200).json(user)

    } catch(error){
        res.status(401).json({message: error})

    }

}

const update = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const user = await Model.update(Number(id),req.body)
        res.status(200).json(user)

    } catch(error){
        res.status(401).json({message: error})

    }

}

const destroy = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params
        await Model.destroy(Number(id))
        res.status(200).send()

    } catch(error){
        res.status(401).json({message: error})

    }

}



export { index , show, store, update, destroy }