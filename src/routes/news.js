const express = require('express');
const newsRouter = express.Router();
const { renderNews } = require('../controllers/news');

newsRouter.get('', renderNews);


module.exports = newsRouter;