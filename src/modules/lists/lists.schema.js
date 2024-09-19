const { DataTypes } = require('sequelize');
const sequelize = require('../../common/db');
const Task = require('../tasks/tasks.schema');

const List = sequelize.define('List', {
  name: {
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
});

List.hasMany(Task, {
  foreignKey: { name: 'listId', allowNull: false },
  onDelete: 'CASCADE',
  as: 'tasks',
});
Task.belongsTo(List, {
  foreignKey: { name: 'listId', allowNull: false },
  onDelete: 'CASCADE',
});

module.exports = List;
