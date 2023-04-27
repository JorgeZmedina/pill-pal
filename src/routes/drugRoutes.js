const express = require('express');
const router = express.Router();
const Drug = require('../models/drug');
const db = require('../config/database');
//CRUD practice. need to communicate with front-end to see if we could add future features like adding drugs taken and deleting meds etc...
// GET all drugs
router.get('/', async (req, res) => {
  try {
    const drugs = await Drug.findAll();
    res.status(200).json(drugs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET a single drug by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const drug = await Drug.findByPk(id);
    if (drug) {
      res.status(200).json(drug);
    } else {
      res.status(404).json({ message: 'Drug not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new drug
router.post('/', async (req, res) => {
  console.log('req.body', req.body)
  const { name, description, email, phone_number } = req.body;
  try {
    const newDrug = await Drug.create({ name, description, email, phone_number, message: 'sadfs' });
    res.status(201).json(newDrug);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT (update) an existing drug
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  try {
    const drug = await Drug.findByPk(id);
    if (drug) {
      drug.name = name;
      drug.description = description;
      await drug.save();
      res.status(200).json(drug);
    } else {
      res.status(404).json({ message: 'Drug not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE a drug
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const drug = await Drug.findByPk(id);
    if (drug) {
      await drug.destroy();
      res.status(200).json({ message: 'Drug deleted successfully' });
    } else {
      res.status(404).json({ message: 'Drug not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
