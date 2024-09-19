const listsService = require('./lists.service');

const ListsController = {
  insert: async (req, res) => {
    try {
      const list = await listsService.create(req.body);
      res.status(201).json(list);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAll: async (_, res) => {
    try {
      const lists = await listsService.getAll();
      res.status(200).json(lists);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
}

module.exports = ListsController;
