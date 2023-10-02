
const express = require('express');


const router = express.Router();

const publicController = require('../controllers/public')

router.post('/', publicController.getLines);

module.exports = router;
