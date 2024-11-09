const { Router } = require("express");

const GroupOrder = require("../models/GroupOrder");
const router = Router();

router.post("/create", async (req, res) => {
  try {
    const { restaurantId, userId } = req.body;
    const groupOrder = new GroupOrder({
      restaurantId,
      groupOwner: userId,
      users: [userId],
    });

    await groupOrder.save();
    res.status(201).json(groupOrder);
  } catch (error) {
    res.status(500).json({ message: "Error creating group order" });
  }
});

router.post("/join", async (req, res) => {
  try {
    const { groupId, userId } = req.body;
    const groupOrder = await GroupOrder.findById(groupId);

    if (!groupOrder)
      return res.status(404).json({ message: "Group not found" });

    groupOrder.users.push(userId);
    await groupOrder.save();

    res.status(200).json(groupOrder);
  } catch (error) {}
});

module.exports = router;
