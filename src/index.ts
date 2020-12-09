import express from 'express' //biblioteca para criar endpoints, provê rotas e porta

const PORT = 8087
const api = express()

api.get('/', (req, res) => {
    res.send("ok")
})

api.listen(PORT, () => {
    console.log(`Example app listening at http://localhost: ${PORT}`)
})