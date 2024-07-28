const express = require('express');
const router = express.Router();

const {getFavorites, AddFavorites} = require('../controllers/favoritesController');

router.get('/favorites', getFavorites);
router.post('/Addfavorites', AddFavorites);

module.exports = router