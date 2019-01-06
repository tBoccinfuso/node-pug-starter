const express = require('express');
const main = require('../controllers/MainController');

const router = express.Router();

// GET routes
router.get('/', main.getIndex);
router.get('/1', main.getPage1);
router.get('/2', main.getPage2);

module.exports = router;
