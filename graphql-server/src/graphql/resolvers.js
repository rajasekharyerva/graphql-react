const Item = require('../models/Item');

const resolvers = {
  Query: {
    items: () => Item.findAll(),
  },
  Mutation: {
    addItem: (_, { name, description }) => Item.create({ name, description }),
    updateItem: async (_, { id, name, description }) => {
      const item = await Item.findByPk(id);
      if (!item) return null;
      return item.update({ name, description });
    },
    deleteItem: async (_, { id }) => {
      const item = await Item.findByPk(id);
      if (!item) return false;
      await item.destroy();
      return true;
    },
  },
};

module.exports = resolvers;



