require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/api');
const firebaseAdmin = require('./firebase'); // Import Firebase Admin

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, BEV212113!');
});

// Example Firebase usage
app.get('/firebase-example', async (req, res) => {
  try {
    const db = firebaseAdmin.firestore();
    const doc = await db.collection('ads').doc('9FXy4aqM3GhgaoBC7IFv').get();
    if (!doc.exists) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json(doc.data());
  } catch (error) {
    console.error('Error fetching document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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
