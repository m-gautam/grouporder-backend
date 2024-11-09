const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/grouporderdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/user", require("./routes/createUser"));
app.use("/groupOrder", require("./routes/groupOrder"));
app.use("/cart", require("./routes/cart"));

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
