const mongoose = require("mongoose");
const Holdingschema = require("../schemas/Holdingschema");

const HoldingsModel = mongoose.model("Holding", Holdingschema);

module.exports = { HoldingsModel };