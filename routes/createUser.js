const { Router } = require("express");
const User = require("../models/User");

const router = Router();

router.post("/create", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = new User({
      name,
      email,
    });

    await user.save();
    console.log(res);

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error creating user");
  }
});

module.exports = router;
