const { Schema } = require("mongoose");

const Holdingschema = new Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: String,
    day: String,
    isLoss: { type: Boolean, default: false }
});

module.exports = Holdingschema; 