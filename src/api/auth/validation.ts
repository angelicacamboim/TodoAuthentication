import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
}

const loginSchema = (req: Request, res:Response, next: NextFunction) => {
    const regEx = /^[0-9]+$/

    const schema: Joi.ObjectSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(regEx, 'numbers').min(6).required()

    })

    const { error, value } = schema.validate(req.body, options)

    if(error){
        const messages = error.details.map(v => v.message).join(', ')
        return res.status(401).json({ messages })
    } else {
        req.body = value
        next()
    }
    
}

const createSchema = (req: Request, res:Response, next: NextFunction) => {
    const regEx = /^[0-9]+$/

    const schema: Joi.ObjectSchema = Joi.object({
        name: Joi.string(),
        avatar: Joi.string(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(regEx, 'numbers').min(6).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required()

    })

    const { error, value } = schema.validate(req.body, options)

    if(error){
        const messages = error.details.map(v => v.message).join(', ')
        return res.status(401).json({ messages })
    } else {
        delete value.confirmPassword
        req.body = value
        next()
    }
    
}

export { loginSchema, createSchema}