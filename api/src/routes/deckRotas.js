// /deck
const express = require('express')
const Deck = require('../db/Deck')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(Deck.listar())
})

router.post('/', (req, res) => {
  let deck = new Deck().assign(req.body)
  deck.salvar()
  res.status(200).send(deck)
})

router.get('/:id', (req, res) => {
  res.send(Deck.consultar(req.params.id))
})

router.put('/:id', (req, res) => {
  let deck = Deck.consultar(req.params.id).assign(req.body)
  deck.salvar()
  res.send(deck)
})

router.delete('/:id', (req, res) => {
  Deck.consultar(req.params.id).deletar()
  res.status(200).send('OK')
})