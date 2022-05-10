const Modelo = require("../framework/Modelo");

class Deck extends Modelo {
  static arquivo = 'decks.json'

  nome = ''
}

module.exports = Deck