const mongoose = require("mongoose");
const { Schema } = mongoose;

const deliverySchema = new Schema({
  client_name: { type: String, required: true },
  weight: { type: Number, required: true },
  address: {
    route: { type: String, required: true },
    street_number: { type: Number, required: true },
    neighborhood: { type: String, required: true },
    complement: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    geometry: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  }
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = { Delivery };
