const mongoose = require("mongoose");
const PositionSchema = require("../schemas/PositionSchema");

const PositionsModel = mongoose.model("Position", PositionSchema);

module.exports = { PositionsModel };
