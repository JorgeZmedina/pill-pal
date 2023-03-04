const axios = require('axios');
//
const { Drug } = require('../models');
//my attempt at pulling from our API to make the site seamless between front and back-end
const drugController = {
    async search(req, res) {
      try {
        const { query } = req.query;
        const response = await axios.get(`https://api.fda.gov/drug/label.json?search=${query}&api_key=t7DZIOAcnNArVa1bI75iVe3e8k81QloEdQ1uY1rJ`);
        const { results } = response.data;
        const drugs = results.map((result) => ({
          name: result.openfda.brand_name?.[0] || result.openfda.substance_name?.[0] || 'Unknown',
          manufacturer: result.openfda.manufacturer_name?.[0] || 'Unknown',
          description: result.description || 'No description available',
        }));
        await Drug.bulkCreate(drugs, { ignoreDuplicates: true });
        res.json(drugs);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while searching for drugs' });
      }
    },

  async getAll(req, res) {
    try {
      const drugs = await Drug.findAll();
      res.json(drugs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving drugs' });
    }
  },
};

module.exports = drugController;
//contain the controller functions that handle requests related to drugs
//i am using axios to make an HTTP request to the openFDA drug label API and search for drugs based on a query parameter. i am then extracting relevant information from the API response and storing it in our database using Sequelize. Finally, i return the list of drugs to the client in JSON format.