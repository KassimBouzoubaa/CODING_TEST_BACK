const TasksService = require('./tasks.service');

const TasksController = {
  insert: async (req, res) => {
    try {
      const { content, priority, listId } = req.body;
      if (content === undefined || priority === undefined) {
        return res.status(400).json({ error: 'Contenu et priorité sont requis' });
      }
      await TasksService.insert({ content, priority, listId});
      res.status(201).send(); 
    } catch (error) {
      console.error('Erreur lors de l\'insertion de la tâche:', error);
      res.status(500).json({ error: 'Erreur lors de l\'insertion de la tâche' });
    }
  },
};


module.exports = TasksController;
