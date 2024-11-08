const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [
    {
      label: String,
      type: String,
      options: [String], // For select, radio, or checkbox fields
      required: Boolean,
    },
  ],
});

module.exports = mongoose.model('Form', formSchema);
