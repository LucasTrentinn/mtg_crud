const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('postgres://hdjqtfmc:vY95UFmzpD0swby2zvLg8X3yeZVCjyJl@kesavan.db.elephantsql.com/hdjqtfmc', {dialect: 'postgres'});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: DataTypes.STRING,
  senha: DataTypes.STRING,
});

User.checarEmailSenha = function (usuario, senha) {
  return this.list().find(user => user.usuario && user.senha)
}

const Deck = sequelize.define('Deck', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: DataTypes.STRING
})

const Carta = sequelize.define('Carta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: DataTypes.STRING,
  edicao: DataTypes.STRING,
  idioma: DataTypes.STRING,
  foil: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  preco: DataTypes.DECIMAL(10, 2),
  quantidade: DataTypes.INTEGER.UNSIGNED
})

User.hasMany(Deck)
Deck.belongsTo(User)

Deck.hasMany(Carta)
Carta.belongsTo(Deck)

module.exports.User = User;
module.exports.Carta = Carta;
module.exports.Deck = Deck;
module.exports.sequelize = sequelize