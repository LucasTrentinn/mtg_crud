// /deck/:id
const express = require('express')
const { Carta, Deck } = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await Carta.findAll({
    where: {
      DeckId: req.query.id
    }
  }))
  console.log(req.params)
})

router.post('/',  async (req, res) => {
  res.status(200).send(await Carta.create(req.body))
})

router.delete('/',  async (req, res) => {
  await Carta.destroy({
    truncate: true,
    restartIdentity: true
  })
  res.status(200).send('OK')
})


router.get('/:id', async (req, res) => {
  res.send(await Carta.findByPk(req.params.id))
})

router.put('/:id',  async (req, res) => {
  let carta = await Carta.findByPk(req.params.id)
  carta.set(req.body)
  await carta.save()
  res.send(carta)
})

router.delete('/:id',  async (req, res) => {
  (await Carta.findByPk(req.params.id)).destroy()
  res.status(200).send('OK')
})

module.exports = router