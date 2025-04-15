const express = require('express');
const cors = require('cors');
const authorRoutes = require('./Router/AuthorRouter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/bookform', authorRoutes); 

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
