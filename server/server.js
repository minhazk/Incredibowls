require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/LawnBowling');
const Game = require('./models/GameSchema');

app.get('/games', async (req, res) => {
    const games = await Game.find();
    res.json(games);
});

app.post('/updateGameInfo', (req, res) => {
    //
});

app.post('/updateTeam', (req, res) => {
    //
});

app.post('/updatePoint', (req, res) => {
    //
});

app.delete('/deleteGame/:id', (req, res) => {
    //
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('server running'));
