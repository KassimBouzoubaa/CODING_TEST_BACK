const { db } = require('../../common/db');
const Task = require('../tasks/tasks.schema');
const List = require('./lists.schema');

const ListsService = {
  create: async (data) => {
    try {
      const { name, priority } = data;
      return await List.create({ name, priority });
    } catch (error) {
      throw new Error(`Error creating list: ${error.message}`);
    }
  },

  getAll: async () => {
    try {
      return await List.findAll({ include: { model: Task, as: 'tasks' } });
    } catch (error) {
      throw new Error(`Error retrieving lists: ${error.message}`);
    }
  },
}

module.exports = ListsService;
