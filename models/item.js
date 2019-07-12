const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  type: { type: String, required: true },
  rarity: { type: String, required: true },
  
  
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
