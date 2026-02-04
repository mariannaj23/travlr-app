const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travlr');

router.get('/', travelController.index);
router.get('/travel', travelController.travel);
router.get('/about', travelController.about);

module.exports = router;
