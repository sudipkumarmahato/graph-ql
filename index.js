const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello Graph QL",
  });
});
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});
