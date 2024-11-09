const { default: mongoose } = require("mongoose");

const groupOrderSchema = new mongoose.Schema({
  restaurantId: String,
  groupOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GroupOrder", groupOrderSchema);
