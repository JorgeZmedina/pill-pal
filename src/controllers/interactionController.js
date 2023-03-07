const { Interaction } = require('../models');
//trying to see if i can nail the interactions down but we would need a search bar for both. Pending work atm
const interactionController = {
  async check(req, res) {
    try {
      const { drug1, drug2 } = req.query;
      const interaction = await Interaction.findOne({ where: { drug1, drug2 } });
      if (interaction) {
        res.json(interaction);
      } else {
        res.json({ message: 'No known interactions' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while checking drug interactions' });
    }
  },

  async getAll(req, res) {
    try {
      const interactions = await Interaction.findAll();
      res.json(interactions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving drug interactions' });
    }
  },

  async create(req, res) {
    try {
      const { drug1, drug2, description } = req.body;
      const interaction = await Interaction.create({ drug1, drug2, description });
      res.json(interaction);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while creating a new drug interaction' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const interaction = await Interaction.findByPk(id);
      if (!interaction) {
        res.status(404).json({ message: `Interaction with ID ${id} not found` });
      } else {
        interaction.description = description;
        await interaction.save();
        res.json(interaction);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `An error occurred while updating drug interaction with ID ${id}` });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const interaction = await Interaction.findByPk(id);
      if (!interaction) {
        res.status(404).json({ message: `Interaction with ID ${id} not found` });
      } else {
        await interaction.destroy();
        res.json({ message: `Interaction with ID ${id} deleted` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `An error occurred while deleting drug interaction with ID ${id}` });
    }
  },
};

module.exports = interactionController;

// to define the controller functions for handling requests related to drug interactions