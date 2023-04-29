const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe!!')
})

app.listen(port, () => {
    console.log('Server running on port 3000')
})