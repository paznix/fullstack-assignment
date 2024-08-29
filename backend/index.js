const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const Card = require("./cardModel");

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Basic endpoint to check server status
app.get("/ping", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Create a card
app.post("/cards", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and description are required" });
    }

    const newCard = new Card({ title, description });
    await newCard.save();

    res.status(201).json(newCard);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "A card with that title already exists" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all cards
app.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a specific card by title
app.get('/cards/:title', async (req, res) => {
    try {
        const title = req.params.title;
        const card = await Card.findOne({ title }); 

        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        res.json(card);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
