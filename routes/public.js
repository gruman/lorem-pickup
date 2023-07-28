const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const publicController = require('../controllers/public')

router.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'Lorem Pickup',
    lines: publicController.getLines(req, res, 20)
  });
});
router.post('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'Lorem Pickup',
    lines: publicController.getLines(req, res, req.body.number)
  });
});

module.exports = router;
