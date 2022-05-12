// /deck
const express = require('express')
const { Deck, Carta } = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await Deck.findAll({ include: Carta }))
})

router.post('/', async (req, res) => {
  res.status(200).send(await Deck.create(req.body))
})

router.delete('/', async (req, res) => {
  await Deck.destroy({
    truncate: true,
    restartIdentity: true
  })
  res.status(200).send('OK')
})


router.get('/:id', async (req, res) => {
  res.send(await Deck.findByPk(req.params.id))
})

router.put('/:id', async (req, res) => {
  let deck = await Deck.findByPk(req.params.id) 
  deck.set(req.body)
  await deck.save()
  res.send(deck)
})

router.delete('/:id', async (req, res) => {
  (await Deck.findByPk(req.params.id)).destroy()
  res.status(200).send('OK')
})

module.exports = router