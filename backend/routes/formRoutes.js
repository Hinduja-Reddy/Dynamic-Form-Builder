const express = require('express');
const Form = require('../models/Form');
const router = express.Router();

// Route to create a new form
router.post('/', async (req, res) => {
  const { title, fields } = req.body;

  try {
    const newForm = new Form({ title, fields });
    await newForm.save();
    res.status(201).json(newForm); // Send the created form as response
  } catch (error) {
    res.status(400).json({ message: 'Error creating form', error: error.message });
  }
});

module.exports = router;
