const { DataTypes } = require('sequelize');
const sequelize = require('../../common/db');

const Task = sequelize.define('Task', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
      max: 2
    },
  },
  listId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Lists',  // Nom de la table pour le modèle List
      key: 'id'        // Clé primaire dans la table List
    }
  },
});

module.exports = Task;


module.exports = Task;
