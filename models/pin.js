const mongoose = require('mongoose');

const PinSchema = mongoose.Schema({
    type_of: {
      type: Number,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    },
    priority: {
      type: Number,
      required: true
    },
    location: {
      lat: {
        type: mongoose.Decimal128,
        required: true
      },
      long: {
        type: mongoose.Decimal128,
        required: true
      },
      address: {
        type: String,
        required: false
      }
    },
    contact: {
      name: {
        type: String,
        required: false
      },
      phone: {
        type: String,
        required: false
      }
    },
    notes: {
      type: String,
      required: false
    }
});

const Pin = module.exports = mongoose.model('Pin', PinSchema);

// create an event
module.exports.addPin = function(newPin, callback) {
  newPin.save(callback);
}

module.exports.getPin = function(type_of, callback) {
  if (type_of == null) {
    Pin.find({}, (err, pins) => {
      callback(err, pins);
    });
  } else {
    Pin.find({ type_of: type_of }, (err, pins) => {
      callback(err, pins);
    });
  }
}

module.exports.deleteAll = function(callback) {
  Pin.deleteMany({}, (err) => {
    callback(err);
  });
}
