const express = require('express');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// 👇 Add this landing page route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to BFHL API</h1>
    <p>This is the landing page of the deployed backend.</p>
    <p>Use <code>POST /bfhl</code> to send data in JSON format.</p>
  `);
});

// Routes for BFHL logic
app.use('/', bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
