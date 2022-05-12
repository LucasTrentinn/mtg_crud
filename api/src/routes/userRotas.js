// /user
const express = require('express')
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const router = express.Router()
const auth = require('../auth')

router.get('/', async (req,res) => {
  res.send(await User.findAll())
})

router.post('/', async (req, res) => {
  res.status(200).send(await User.create(req.body))
})

router.get('/:id', async (req, res) => {
  res.send(await User.findByPk(req.params.id))
})

router.put('/:id', async (req, res) => {
  let user = await User.findByPk(req.params.id)
  user.set(req.body)
  await user.save()
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  (await User.findByPk(req.params.id)).destroy()
  res.status(200).send('OK')
})

router.post('/login', (req, res) => {
  const { email, senha } = req.body

  const user = User.checkEmailSenha(email, senha)

  if(user == null) {
    res.status(401).send('Usuário ou senha inválidos.')
  } else {
    const token = jwt.sign({usuario_id: usuario.id}, 'chavesecreta')
    res.send({usuario, token})
  }
})

module.exports = router