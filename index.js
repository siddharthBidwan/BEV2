require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, BEV212113!');
});

// Use API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
