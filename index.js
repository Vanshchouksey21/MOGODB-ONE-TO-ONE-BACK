const express = require('express');
const cors = require('cors');
const authorRoutes = require('./Router/AuthorRouter');
require('dotenv').config();

const mongoose  = require("mongoose")

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("MongoDB connected");
})

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
