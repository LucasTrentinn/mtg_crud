// Declarações
const express = require('express')
const bodyParser =  require('body-parser')
const { join } = require('path')
const cors = require('cors')
const porta = 3001
const Modelo = require('./framework/Modelo')

// Rotas
const decks = require('./routes/deckRotas')
const cartas = require('./routes/cartaRotas')

Modelo.dir = join(__dirname, '..', 'json')

// App
const app = express()
app.use(bodyParser.json())
app.use(cors())

// Métodos
app.get('', (req, res) => {
  res.send('MTG')
})

app.use('/decks', decks)
app.use('/cartas', cartas)

app.listen(porta, () => {
  console.log(`Conectado à porta ${porta}.`)
})