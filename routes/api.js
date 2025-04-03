const express = require('express');
const router = express.Router();

// Example API route
router.get('/example', (req, res) => {
  res.json({ message: 'This is an example API endpoint' });
});

module.exports = router;
