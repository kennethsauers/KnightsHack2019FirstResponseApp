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
    category: {
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
      coords: {
        lat: {
          type: mongoose.Decimal128,
          required: true
        },
        long: {
          type: mongoose.Decimal128,
          required: true
        },
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
