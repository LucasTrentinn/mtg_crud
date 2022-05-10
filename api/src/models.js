const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('sqlite:./db.sqlite');

module.exports.User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

module.exports.Deck = sequelize.define('Deck', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: DataTypes.STRING
})

module.exports.Carta = sequelize.define('Carta', {
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

module.exports.sequelize = sequelize