const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

app.use('/api/forms', formRoutes); // Use formRoutes for handling form-related requests

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });
  const cors = require('cors');
app.use(cors()); // This allows all domains; customize it if needed


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
