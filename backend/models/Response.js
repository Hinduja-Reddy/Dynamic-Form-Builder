const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  responses: [{ fieldId: String, answer: String }],
});

module.exports = mongoose.model('Response', responseSchema);
