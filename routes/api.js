const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Pin = require('../models/pin');

router.get('/', (req, res, next) => {
  return res.json({ success: true });
});

router.delete('/pin/all', (req, res, next) => {
  Pin.deleteAll(err => {
    if (err) return res.json({ success: false, msg: err });

    return res.json({ success: true });
  });
});

router.get('/pin/get/:role', (req, res, next) => {
   const role = req.params.role;

   Pin.getPin(role, (err, pins) => {
     if (err) return res.json({ success: false, msg: err });

     return res.json( pins );
   });
});

router.get('/pin/get', (req, res, next) => {
  Pin.getPin(null, (err, pins) => {
    if (err) return res.json({ success: false, msg: err });

    return res.json( pins );
  });
});

router.put('/pin/create', (req, res, next) => {
  let newPin = new Pin({
    type_of: req.body.type_of || 0,
    subject: req.body.subject || "",
    status: false,
    priority: req.body.priority || 1,
    notes: req.body.notes || "",
    contact: {
      name: req.body.contact.name || "",
      phone: req.body.contact.phone || ""
    },
    location: {
      address: req.body.location.address || "",
      lat: req.body.location.lat || 0,
      long: req.body.location.long || 0
    }
  });

  Pin.addPin(newPin, (err, model) => {
    if (err) return res.json({ success: false, msg: err });

    res.json({ success: true, pin: model });
  });
});

module.exports = router;
