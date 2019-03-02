const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Event = require('../models/event');

router.get('/', (req, res, next) => {
  return res.json({ success: true });
});

router.put('/events/create', (req, res, next) => {
  const newEvent = req.body;

  Event.addEvent(newEvent, (err, model) => {
    if (err) return res.json({ success: false, msg: err });

    res.json({ success: true, event: model });
  });
});

module.exports = router;
