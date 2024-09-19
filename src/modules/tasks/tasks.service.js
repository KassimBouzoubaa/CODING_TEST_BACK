const Task = require('./tasks.schema');

const TasksService = {
  insert: async (taskData) => {
    try {
      const { content, priority, listId } = taskData;
      await Task.create({ content, priority, listId});
    } catch (error) {
      console.error('Erreur lors de l\'insertion de la tâche dans la base de données:', error);
      throw new Error('Erreur lors de l\'insertion de la tâche dans la base de données');
    }
  },
};

module.exports = TasksService;
