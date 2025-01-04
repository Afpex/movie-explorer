// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/movies', async (req, res) => {
  const { query } = req.query; // Query for search
  const url = `https://api.themoviedb.org/3/search/movie`;
  try {
    const response = await axios.get(url, {
      params: {
        api_key: TMDB_API_KEY,
        query,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch movies.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
