const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Pin = require('../models/pin');

router.get('/', (req, res, next) => {
  return res.json({ success: true });
});

router.put('/pin/create', (req, res, next) => {
  let newPin = new Pin({
    type_of: req.body.type_of,
    subject: req.body.subject,
    category: req.body.category,
    status: false,
    priority: req.body.priority,
    notes: req.body.notes,
    contact: {
      name: req.body.contact.name,
      phone: req.body.contact.phone
    },
    location: {
      address: req.body.location.address,
      coords: {
        lat: req.body.location.coords.lat,
        long: req.body.location.coords.long
      }
    }
  });

  Pin.addPin(newPin, (err, model) => {
    if (err) return res.json({ success: false, msg: err });

    res.json({ success: true, pin: model });
  });
});

module.exports = router;
