const { default: mongoose } = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  groupOrder: { type: mongoose.Schema.Types.ObjectId, ref: "GroupOrder" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  itemName: String,
  quantity: Number,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CartItem", cartItemSchema);
