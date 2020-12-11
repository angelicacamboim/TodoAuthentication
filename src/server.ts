import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes'

class Server {
    public express: express.Application //interface

    constructor(){
        this.express = express()
        this.initialize()
    }

    private middlewares() {
        // Essa parte irá fazer esse processo de transformar fluxo de dados
        // ( vindo de um formulário HTML) em um formato de objeto Javascript
        //http://domain.com/user?name=angel&username=angelcb
        //{ "name": "angel", "username": "angelcb"}
        this.express.use(bodyParser.urlencoded({ extended: true}))
        this.express.use(bodyParser.json({ limit: '5mb'}))
        //CORS é um mecanismo que permite que recursos restritos em uma página da
        // web sejam recuperados por outro 
        //domínio fora do domínio ao qual pertence o recurso que será recuperado
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