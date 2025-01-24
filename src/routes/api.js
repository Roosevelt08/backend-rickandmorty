const express = require('express');
const router = express.Router();
const { getCharacters, addFavorite, getFavorites, deleteFavorite } = require('../controllers/favoritesController');


router.get('/characters', getCharacters);
router.post('/favorites', addFavorite);
router.get('/favorites', getFavorites);
router.delete('/favorites/:id', deleteFavorite);

module.exports = router;
