const express = require('express');
const axios = require('axios');
const fetch = require('node-fetch');
require('dotenv').config();

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/api", async (req, res) => {

  try {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    const { url, bodyContent } = req.body;

    if (!url) {
      return res.status(400).json({ message: "url parameter is required" });
    }

    const resData = await fetch(url, {
      method: 'POST',
      url,
      headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.CLIENT_ID,
        'Authorization': `Bearer ${process.env.IGDB_API_KEY}`,
        'Content-Type': "text/plain"
      },
      body: bodyContent
    });

    const data = await resData.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.response.data);
  }

});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
