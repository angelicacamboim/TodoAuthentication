import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes'

class Server {
    public express: express.Application

    constructor(){
        this.express = express()
        this.initialize()
    }

    private middlewares() {
        // Essa parte irá fazer esse processo de transformar fluxo de dados
        // ( vindo de um formulário HTML) em um formato de objeto Javascript
        this.express.use(bodyParser.urlencoded({ extended: true}))
        //Essa parte irá fazer esse processo de transformar vindo de JSON via Postman,
        // Imsonmnia, Curl em um formato de objeto js
        this.express.use(bodyParser.json({ limit: '5mb'}))
        this.express.use(cors())
    }

    private routes() {
        this.express.use(routes)

    }

    private initialize(){
        this.middlewares()
        this.routes()

    }
}

export default new Server().express