const express = require('express');
const path = require('path');
const app = express();

// Render provides the port in process.env.PORT
const PORT = process.env.PORT || 3000;

// Serve everything inside the frontend folder (HTML, CSS, JS, images)
app.use(express.static(path.resolve(__dirname, '../frontend')));

// Routes for specific pages
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/index.html'));
});

app.get('/software', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/software.html'));
});

app.get('/hardware', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/hardware.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});