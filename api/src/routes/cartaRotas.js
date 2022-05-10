// /deck/:id
const express = require('express')
const Carta = require('../db/Carta')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(Carta.listar())
})

router.post('/', (req, res) => {
  let carta = new Carta().assign(req.body)
  carta.salvar()
  res.status(200).send(carta)
})

router.get('/:id', (req, res) => {
  res.send(Carta.consultar(req.params.id))
})

router.put('/:id', (req, res) => {
  let carta = Carta.consultar(req.params.id).assign(req.body)
  carta.salvar()
  res.send(carta)
})

router.delete('/:id', (req, res) => {
  Carta.consultar(req.params.id).deletar()
  res.status(200).send('OK')
})

module.exports = router