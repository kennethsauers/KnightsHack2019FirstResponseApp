const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Event = require('../models/event');

router.get('/', (req, res, next) => {
  return res.json({ success: true });
});

module.exports = router;
