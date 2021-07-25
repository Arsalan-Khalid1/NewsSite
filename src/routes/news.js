const express = require('express');
const newsRouter = express.Router();
const { renderNews, renderSlug, searchPost } = require('../controllers/news');

newsRouter.get('', renderNews);
newsRouter.get('/:id', renderSlug);
newsRouter.post('', searchPost);


module.exports = newsRouter;