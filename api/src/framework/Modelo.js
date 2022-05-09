const fs = require('fs')
const { join } = require("path")

class Modelo {
  static dir
  static file = ''

  constructor() {   
  }

  id = 0 
  dataEnvio = new Date()
  dataAtt = new Date()

  static get arquivoCaminho() {
    return join(this.dir, this.arquivo)
  }

  assign(obj={}) {
    Object.assign(this, obj)
    return this
  }

  static listar() {
    try {
      const dados = fs.existsSync(this.arquivoCaminho) ?
        fs.readFileSync(this.arquivoCaminho) : ''
    
      return JSON.parse(dados).map(obj => new this().assign(obj))
    }
    catch(err) {
      return []
    }
  }

  static consultar(id) {
    let dados = this.listar().filter((obj) => obj.id == id)

    if(dados.length == 0) {
      throw new Error("Objeto não encontrado.")
    }

    const obj = new this()
    obj.assign(dados[0])

    return obj
  }

  salvar() {
    let dados = this.constructor.listar()

    if(this.id == 0) {
      this.id = dados.length > 0 ? dados[dados.length - 1].id + 1 : 1
      dados.push(this)
    } else {
      let idx = dados.findIndex((obj) => obj.id == this.id)

      if(idx == -1)
        throw new Error("Objeto não encontrado.")

      dados[idx] = this
    }

    fs.writeFileSync(this.constructor.arquivoCaminho, JSON.stringify(dados, null, '\t'))
  }

  deletar() {
    let dados = this.constructor.listar()
    let idx = dados.findIndex((obj) => obj.id == this.id)

    if(idx == -1)
      throw new Error("Objeto não encontrado.")

    dados.splice(idx, 1)

    fs.writeFileSync(this.constructor.arquivoCaminho, JSON.stringify(dados, null, '\t'))
  }
}

module.exports = Modelo