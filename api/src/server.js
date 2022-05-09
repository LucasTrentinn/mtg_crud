// Declarações
const express = require('express')
const bodyParser =  require('body-parser')
const { join } = require('path')
const cors = require('cors')
const porta = 3001

// Rotas

// App
const app = express()
app.use(bodyParser.json())
app.use(cors())

// Métodos
app.get('', (req, res) => {
  res.send('MTG')
})

app.listen(porta, () => {
  console.log(`Conectado à porta ${porta}.`)
})