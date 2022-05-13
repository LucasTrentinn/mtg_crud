// Declarações
const express = require('express');
require('dotenv').config()
const bodyParser =  require('body-parser')
const { join } = require('path')
const cors = require('cors')
const port = process.env.PORT || 3001


// Rotas
const usuarios = require('./routes/userRotas')
const decks = require('./routes/deckRotas')
const cartas = require('./routes/cartaRotas')
const { sequelize } = require('./models')

// App
const app = express()
app.use(bodyParser.json())
app.use(cors())

// Métodos
app.get('', (req, res) => {
  res.send('MTG')
})

app.use('/usuarios', usuarios)
app.use('/decks', decks)
app.use('/cartas', cartas)

sequelize.sync({logging:true}).then((value) => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
  })
})
