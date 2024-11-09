const { Router } = require("express");

const CartItem = require("../models/CartItem");

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const { groupId, userId, itemName, quantity, price } = req.body;

    const cartItem = new CartItem({
      groupOrder: groupId,
      user: userId,
      itemName,
      quantity,
      price,
    });

    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: "Error adding item to cart" });
  }
});

router.get("/:groupId", async (req, res) => {
  try {
    const cartItems = await CartItem.find({ groupOrder: req.params.groupId })
      .populate("user", "name")
      .exec();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart items" });
  }
});

module.exports = router;
