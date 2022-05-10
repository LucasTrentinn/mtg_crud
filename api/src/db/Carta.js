const Modelo = require("../framework/Modelo");

class Carta extends Modelo {
  static arquivo = 'cartas.json'

  nome = ''
  edicao = ''
  idioma = [] 
  foil = false
  preco = 0
  quantidade = 0

}

module.exports = Carta