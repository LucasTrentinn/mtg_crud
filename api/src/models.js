const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('sqlite:./db.sqlite');

module.exports.User = sequelize.define('User', {
  email: DataTypes.STRING,
  senha: DataTypes.DATE,
});

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

Deck.hasMany(Carta)
Carta.belongsTo(Deck)

module.exports.Carta = Carta;
module.exports.Deck = Deck
module.exports.sequelize = sequelize